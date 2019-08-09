/* eslint-disable radix */
import uuid from 'uuid';
import Book from '../../models/bookings';

const bookDataUtil = (req, getUser, trip) => {
  const { tripDate, numberOfSeats } = req.body;

  const bookData = Book.bookindModel(
    uuid.v4(),
    getUser.id,
    trip.busLicenseNumber,
    tripDate,
    parseInt(numberOfSeats),
    getUser.firstName,
    getUser.lastName,
    getUser.email,
  );
  return bookData;
};

module.exports = bookDataUtil;
