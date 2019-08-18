import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';

const book = new Book();
const getAllBookings = async (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);
  if (getUser.isadmin === true) {
    const allBookings = await book.getAtllbookings();
    if (allBookings.rowCount === 0) {
      return resPonse.errorMessage(res, 404, 'no bookings made at the moment');
    }
    return resPonse.successData(res, 200, 'all \'users\' bookings successfully fetched', allBookings.rows);
  }
  const forUser = await book.checkBookingUser(getUser.user_id);
  if (forUser.rowCount === 0) {
    return resPonse.errorMessage(res, 404, 'you have made no bookings yet');
  }
  return resPonse.successData(res, 200, 'all bookings successfully fetched', forUser.rows);
};
module.exports = getAllBookings;
