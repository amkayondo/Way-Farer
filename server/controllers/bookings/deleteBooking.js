import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';

const book = new Book();

const deleteBooking = async (req, res) => {
  const { bookingId } = req.params;
  const getUser = jwt.decode(req.headers.authorization);
  const foundBooking = await book.deleteUserBookings(getUser.user_id, bookingId);
  if (foundBooking.rowCount === 0) {
    return resPonse.errorMessage(res, 400, `Booking not found with id ${bookingId}`);
  }
  const booking = foundBooking.rows[0];
  const foundTrip = await book.checkIfTripExists(booking.bus_license_number, booking.trip_date);
  const trip = foundTrip.rows[0];
  if (foundBooking.rowCount === 1 || getUser.isAdmin === true) {
    const increaseNumberOfSeats = trip.available_seats + booking.number_of_seats;
    await book.updateNumberOfSeats(trip.trip_id, increaseNumberOfSeats);
    await book.deleteBookingByUser(bookingId, getUser.user_id);
    return resPonse.successWithNoData(res, 200, 'Booking successfully deleted');
  } resPonse.errorMessage(res, 400, `You did not make this booking with id ${bookingId}`);
};
module.exports = deleteBooking;
