import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';

const deleteBooking = (req, res) => {
  const { bookingId } = req.params;
  const getUser = jwt.decode(req.headers.authorization);
  const foundBooking = Book.findBooking(bookingId);
  const userMatches = Book.checkBookingUser(getUser.id);
  try {
    if (foundBooking) {
      if (userMatches) {
        const foundTrip = Book.checkIfTripExists(foundBooking.busLicenseNumber);
        const firstB = foundTrip.availableSeats + foundBooking.numberOfSeats;
        foundTrip.availableSeats = firstB;
        Book.bookingDatabase.splice(bookingId, 1);
        return resPonse.successData(res, 200, 'Booking successfully deleted');
      } resPonse.errorMessage(res, 400, `You did not make this booking with id ${bookingId}`);
    } return resPonse.errorMessage(res, 400, `Booking not found with id ${bookingId}`);
  // eslint-disable-next-line no-empty
  } catch (error) {}
  return true;
};
module.exports = deleteBooking;
