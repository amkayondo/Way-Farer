import Trip from './trips';

const bookingDatabase = [];
const newTrip = Trip;

const Book = {
  bookingDatabase,
  bookindModel(bookingId, userId, busLicenseNumber,
    tripDate, numberOfSeats, firstName, lastName, email) {
    return {
      bookingId,
      userId,
      busLicenseNumber,
      tripDate,
      numberOfSeats,
      firstName,
      lastName,
      email,
    };
  },
  createNewBooking(bookingData) {
    const booking = this.bookindModel(
      bookingData.bookingId,
      bookingData.userId,
      bookingData.busLicenseNumber,
      bookingData.tripDate,
      bookingData.numberOfSeats,
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
  checkBookingUser(userid) {
    return bookingDatabase.find(x => x.userId === userid);
  },
  findBooking(bookid) {
    return bookingDatabase.find(x => x.bookingId === bookid);
  },
};

module.exports = Book;
