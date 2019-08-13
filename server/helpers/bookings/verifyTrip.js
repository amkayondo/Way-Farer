/* eslint-disable radix */

const verifyTrip = (foundTrip, resPonse, res, numberOfSeats, Book, bookData) => {
  if (!(foundTrip.status === 'active')) {
    return resPonse.errorMessage(res, 403, 'Booking was unseccessful because the trip was cancelled');
  }
  if (foundTrip.availableSeats === 0) {
    return resPonse.errorMessage(res, 404, 'No seats available for booking on this trip');
  }
  if (foundTrip.availableSeats < parseInt(numberOfSeats)) {
    return resPonse.errorMessage(res, 400, `Number of seats must be less than ${foundTrip.availableSeats}`);
  }
  foundTrip.availableSeats = Book.decreaseNumberOfSeats(foundTrip.availableSeats,
    parseInt(numberOfSeats));
  Book.createNewBooking(bookData); return resPonse.successData(res, 201, 'New Booking successfully made', bookData);
};

module.exports = verifyTrip;
