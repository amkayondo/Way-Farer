/* eslint-disable radix */
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';
import bookingSchema from '../../helpers/schema/booking';
import bookDataUtil from '../../helpers/util/bookingUtil';

const createBooking = (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);

  const { tripId, tripDate, numberOfSeats } = req.body;

  const schema = bookingSchema(Joi);
  Joi.validate(req.body, schema, (error) => {
    if (error) {
      return resPonse.errorMessage(res, 400, (`${error.details[0].context.label}`));
    }
    const foundTrip = Book.checkIfTripExists(tripId);
    if (!(foundTrip)) {
      return resPonse.errorMessage(res, 400, `Trip with ID ${tripId} doesnt exist`);
    }
    const bookData = bookDataUtil(req, getUser, foundTrip);
    if (foundTrip.tripDate === tripDate) {
      if (!(foundTrip.status === 'active')) {
        return resPonse.errorMessage(res, 403, 'Booking was unseccessful because the trip was cancelled');
      }
      if (foundTrip.availableSeats === 0) {
        return resPonse.errorMessage(res, 404, 'No seats available for booking on this trip');
      }
      if (foundTrip.availableSeats < parseInt(numberOfSeats)) {
        return resPonse.errorMessage(res, 400, `Number of seats must be less than ${foundTrip.availableSeats}`);
      }
      foundTrip.availableSeats = Book.decreaseNumberOfSeats(foundTrip.availableSeats,
        parseInt(numberOfSeats));
      Book.createNewBooking(bookData); return resPonse.successData(res, 201, bookData);
    } return resPonse.errorMessage(res, 400, `No trip is available on this date ${tripDate}`);
    // return true;
  });
  return true;
};

module.exports = createBooking;
