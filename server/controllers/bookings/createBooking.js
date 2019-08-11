/* eslint-disable radix */
import jwt from 'jsonwebtoken';
import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';
import bookingSchema from '../../helpers/schema/booking';
import bookDataUtil from '../../util/bookingUtil';
import verifyTrip from '../../helpers/bookings/verifyTrip';

const createBooking = (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);

  const { tripId, tripDate, numberOfSeats } = req.body;

  const schema = bookingSchema(Joi);
  // eslint-disable-next-line consistent-return
  Joi.validate(req.body, schema, (error) => {
    try {
      if (error) {
        return resPonse.errorMessage(res, 400, (`${error.details[0].context.label}`));
      }
      const foundTrip = Book.checkIfTripExists(tripId);
      if (!(foundTrip)) {
        return resPonse.errorMessage(res, 404, `Trip with ID ${tripId} doesnt exist`);
      }
      const bookData = bookDataUtil(req, getUser, foundTrip);
      if (foundTrip.tripDate === tripDate) {
        verifyTrip(foundTrip, resPonse, res, numberOfSeats, Book, bookData);
      } return resPonse.errorMessage(res, 404, `No trip is available on this date ${tripDate}`);
    // eslint-disable-next-line no-empty
    } catch (err) {}
  });
  return true;
};

module.exports = createBooking;
