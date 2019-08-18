import Book from '../../models/bookings';

const bkdb = new Book();

const bookDataUtil = async (req, getUser, trip) => {
  const { tripDate, numberOfSeats } = req.body;

  const bookData = await bkdb.createNewBooking(
    getUser.user_id,
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
