/* eslint-disable radix */
import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';
import bookDataUtil from '../../util/bookingUtil';
import verifyTrip from '../../helpers/bookings/verifyTrip';

const createBooking = (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);

  const { tripId, tripDate, numberOfSeats } = req.body;

  try {
    const foundTrip = Book.checkIfTripExists(tripId);
    if (!(foundTrip)) {
      return resPonse.errorMessage(res, 404, `Trip with ID ${tripId} doesnt exist`);
    }
    const bookData = bookDataUtil(req, getUser, foundTrip);
    if (foundTrip.tripDate === tripDate) {
      verifyTrip(foundTrip, resPonse, res, numberOfSeats, Book, bookData);
    } return resPonse.errorMessage(res, 404, `No trip is available on this date ${tripDate}`);
  } catch (err) {
    resPonse.errorMessage(res, 500, err.message);
  }
};

module.exports = createBooking;
