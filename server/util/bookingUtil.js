import Book from '../models/bookings';

const bookDataUtil = (req, getUser, trip) => {
  const { tripDate, numberOfSeats } = req.body;

  const bookData = Book.bookindModel(
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
