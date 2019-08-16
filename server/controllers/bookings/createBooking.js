import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';
import verifyTrip from '../../helpers/bookings/verifyTrip';

const book = new Book();
const createBooking = async (req, res) => {
  const getUser = jwt.decode(req.headers.authorization);
  const { trip_id, trip_date, number_of_seats } = req.body;
  try {
    const foundTrip = await book.isTripIdExixts(trip_id);
    const trpData = foundTrip.rows[0];
    if (foundTrip.rowCount === 0) {
      return resPonse.errorMessage(res, 404, `Trip with ID ${trip_id} doesnt exist`);
    }
    const trpDat = {
      user_id: getUser.user_id,
      bus_license_number: trpData.bus_license_number,
      trip_date: trpData.trip_date,
      number_of_Seats: number_of_seats,
      first_name: getUser.first_name,
      last_name: getUser.last_name,
      email: getUser.email,
    };
    if (trpData.trip_date === trip_date){
      if (foundTrip) {
        return verifyTrip(trpData, resPonse, res, number_of_seats, book, trpDat);
      }
    }
    resPonse.errorMessage(res, 404, `No trip is available on this date ${trip_date}`);
  } catch (err) {
    resPonse.errorMessage(res, 500, err.message);
  }
};
module.exports = createBooking;
