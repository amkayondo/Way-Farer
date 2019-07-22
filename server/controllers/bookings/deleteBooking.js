import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';

const deleteBooking = (req, res) => {
  const { bookingId } = req.params;
  const getUser = jwt.decode(req.headers.authorization);
  const foundTrip = Book.findBooking(bookingId);
  const userMatches = Book.checkBookingUser(getUser.id);
  try {
    if (foundTrip) {
      if (userMatches) {
        Book.bookingDatabase.splice(bookingId, 1); return resPonse.successData(res, 200, 'Booking successfully deleted');
      } resPonse.errorMessage(res, 400, `You did not make this booking with id ${bookingId}`);
    } return resPonse.errorMessage(res, 400, `Trip not found with id ${bookingId}`);
  // eslint-disable-next-line no-empty
  } catch (error) {}
  return true;
};
module.exports = deleteBooking;
