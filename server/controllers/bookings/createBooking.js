import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';
import bookingSchema from '../../helpers/schema/booking';
import bookDataUtil from '../../helpers/util/bookingUtil';

const createBooking = (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);
  const { busLicenseNumber, tripDate } = req.body;
  const bookData = bookDataUtil(req, getUser);
  const schema = bookingSchema(Joi);
  Joi.validate(req.body, schema, (error) => {
    if (error) {
      return resPonse.errorMessage(res, 400, (error.details[0].message));
    }
    if (!(Book.checkIfTripExists(busLicenseNumber))) {
      return resPonse.errorMessage(res, 400, `Bus license number ${busLicenseNumber} doesnt exist`);
    }
    if (Book.checkIfTripDateIsValid(tripDate)) {
      Book.createNewBooking(bookData); return resPonse.successData(res, 201, bookData);
    } resPonse.errorMessage(res, 400, `No trip is available on this date ${tripDate}`);
    return true;
  });
  return true;
};

module.exports = createBooking;
