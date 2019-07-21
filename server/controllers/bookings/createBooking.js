import jwt from 'jsonwebtoken';
import uuid from 'uuid';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';

const createBooking = (req, res) => {
/*
 getting user info
 - match the user with token
*/
  const getUser = jwt.decode(req.headers.authorization);
  const { busLicenseNumber, tripDate } = req.body;
  const bookData = Book.bookindModel(
    uuid.v4(),
    busLicenseNumber,
    tripDate,
    getUser.firstName,
    getUser.lastName,
    getUser.email,
  );
  const foundBus = Book.checkIfTripExists(bookData.busLicenseNumber);
  const foundDate = Book.checkIfTripDateIsValid(bookData.tripDate);
  if (foundBus) {
    if (foundDate) {
      Book.createNewBooking(bookData);
      const data = bookData;
      return resPonse.successData(res, 201, data);
    } resPonse.errorMessage(res, 400, `No trip is available on this date ${tripDate}`);
  } else {
    resPonse.errorMessage(res, 400, `Bus license number ${busLicenseNumber} doesnt exist`);
  }
  return true;
};

module.exports = createBooking;
