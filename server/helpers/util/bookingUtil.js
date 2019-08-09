/* eslint-disable radix */
import uuid from 'uuid';
import Book from '../../models/bookings';

const bookDataUtil = (req, getUser) => {
  const { busLicenseNumber, tripDate, numberOfSeats } = req.body;

  const bookData = Book.bookindModel(
    uuid.v4(),
    getUser.id,
    busLicenseNumber,
    tripDate,
    parseInt(numberOfSeats),
    getUser.firstName,
    getUser.lastName,
    getUser.email,
  );
  return bookData;
};

module.exports = bookDataUtil;
