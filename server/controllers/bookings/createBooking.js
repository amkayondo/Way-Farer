/* eslint-disable radix */
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';
import bookingSchema from '../../helpers/schema/booking';
import bookDataUtil from '../../helpers/util/bookingUtil';

const createBooking = (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);
  const { busLicenseNumber, tripDate, numberOfSeats } = req.body;
  const bookData = bookDataUtil(req, getUser);
  const schema = bookingSchema(Joi);
  Joi.validate(req.body, schema, (error) => {
    if (error) {
      return resPonse.errorMessage(res, 400, (error.details[0].message));
    }
    const foundTrip = Book.checkIfTripExists(busLicenseNumber);
    if (!(foundTrip)) {
      return resPonse.errorMessage(res, 400, `Bus license number ${busLicenseNumber} doesnt exist`);
    }
    if (foundTrip.tripDate === tripDate) {
      if (foundTrip.availableSeats === 0) {
        return resPonse.errorMessage(res, 404, 'No seats available for booking on this trip');
      }
      if (foundTrip.availableSeats < parseInt(numberOfSeats)) {
        return resPonse.errorMessage(res, 400, `Number of seats must be less than ${foundTrip.availableSeats}`);
      }
      foundTrip.availableSeats = Book.decreaseNumberOfSeats(foundTrip.availableSeats,
        parseInt(numberOfSeats));
      Book.createNewBooking(bookData); return resPonse.successData(res, 201, bookData);
    } resPonse.errorMessage(res, 400, `No trip is available on this date ${tripDate}`);
    return true;
  });
  return true;
};

module.exports = createBooking;
