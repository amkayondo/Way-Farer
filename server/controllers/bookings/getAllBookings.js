import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';

const book = new Book();
const getAllBookings = async (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);
  if (getUser.isadmin === true) {
    const allBookings = await book.getAtllbookings();
    if (allBookings.rowCount === 0) {
      return resPonse.errorMessage(res, 404, 'No bookings made at the moment');
    } resPonse.successData(res, 200, 'All bookings successfully fetched', allBookings.rows);
  }
  const forUser = await book.checkBookingUser(getUser.user_id);
  if (forUser.rowCount === 0) {
    return resPonse.errorMessage(res, 200, 'You have made no bookings yet');
  } resPonse.successData(res, 200, 'All bookings successfully fetched', forUser.rows);
  return true;
};
module.exports = getAllBookings;
