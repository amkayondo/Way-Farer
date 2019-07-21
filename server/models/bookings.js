import Trip from './trips';

const bookingDatabase = [];
const newTrip = Trip;

const Book = {
  bookingDatabase,
  bookindModel(bookingId, busLicenseNumber, tripDate, firstName, lastName, email) {
    return {
      bookingId,
      busLicenseNumber,
      tripDate,
      firstName,
      lastName,
      email,
    };
  },
  createNewBooking(bookingData) {
    const booking = this.bookindModel(
      bookingData.bookingId,
      bookingData.busLicenseNumber,
      bookingData.tripDate,
      bookingData.firstName,
      bookingData.lastName,
      bookingData.email,
    );
    bookingDatabase.push(booking);
  },
  checkIfTripExists(busLicense) {
    return newTrip.findbusLicenseNumber(busLicense);
  },
  checkIfTripDateIsValid(Date) {
    return newTrip.findTripDate(Date);
  },
};

module.exports = Book;
