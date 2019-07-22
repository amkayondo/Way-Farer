import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import uuid from 'uuid';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';
import bookingSchema from '../../helpers/schema/booking';


const createBooking = (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);
  const { busLicenseNumber, tripDate, numberOfSeats } = req.body;
  const bookData = Book.bookindModel(
    uuid.v4(),
    getUser.id,
    busLicenseNumber,
    tripDate,
    numberOfSeats,
    getUser.firstName,
    getUser.lastName,
    getUser.email,
  );
  const inputData = req.body;
  const schema = bookingSchema(Joi);
  Joi.validate(inputData, schema, (error) => {
    if (error) {
      return resPonse.errorMessage(res, 400, (error.details[0].message));
    }
    const foundBus = Book.checkIfTripExists(bookData.busLicenseNumber);
    const foundDate = Book.checkIfTripDateIsValid(bookData.tripDate);
    if (foundBus) {
      if (foundDate) {
        Book.createNewBooking(bookData);
        const data = bookData;
        return resPonse.successData(res, 200, data);
      } resPonse.errorMessage(res, 400, `No trip is available on this date ${tripDate}`);
    } else {
      return resPonse.errorMessage(res, 400, `Bus license number ${busLicenseNumber} doesnt exist`);
    }
    return true;
  });
  return true;
};

module.exports = createBooking;
