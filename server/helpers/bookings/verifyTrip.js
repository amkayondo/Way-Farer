const verifyTrip = async (foundTrip, resPonse, res, number_of_Seats, Book, bookData) => {
  if (!(foundTrip.status === 'active')) {
    return resPonse.errorMessage(res, 405, 'Booking was unseccessful because the trip was cancelled');
  }
  if (foundTrip.available_seats === 0) {
    return resPonse.errorMessage(res, 404, 'No seats available for booking on this trip');
  }
  if (foundTrip.available_seats < parseInt(number_of_Seats)) {
    return resPonse.errorMessage(res, 400, `Number of seats must be less than ${foundTrip.available_seats}`);
  }
  const decreaseNumberOfSeats = foundTrip.available_seats - parseInt(number_of_Seats);
  await Book.updateNumberOfSeats(foundTrip.trip_id, decreaseNumberOfSeats);
  const newData = await Book.createNewBooking(bookData);
  return resPonse.successData(res, 201, 'new Booking successfully made', newData.rows[0]);
};

module.exports = verifyTrip;
