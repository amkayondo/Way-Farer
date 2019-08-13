import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';

const getAllBookings = (req, res) => {
  try {
    const getUser = jwt.decode(req.headers.authorization);
    if (getUser.isAdmin === true) {
      const allBookings = Book.bookingDatabase;
      if (allBookings.length === 0) {
        return resPonse.errorMessage(res, 404, 'No bookings made at the moment');
      } resPonse.successData(res, 200, allBookings);
    }
    const forUser = Book.getUserBookings(getUser.id);
    if (forUser.length === 0) {
      return resPonse.errorMessage(res, 200, 'You have made no bookings yet');
    } resPonse.successData(res, 200, forUser);
  } catch (error) {
    resPonse.errorMessage(res, 500, error.message);
  }
  return true;
};
module.exports = getAllBookings;
