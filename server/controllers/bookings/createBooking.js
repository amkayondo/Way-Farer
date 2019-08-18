import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Book from '../../models/bookings';
import verifyTrip from '../../helpers/bookings/verifyTrip';
import tripdata from '../../util/booking/tripdata';

const book = new Book();
const createBooking = async (req, res) => {
  const foundTrip = await book.isTripIdExixts(req.body.trip_id);
  const trpData = foundTrip.rows[0];
  if (foundTrip.rowCount === 0) {
    return resPonse.errorMessage(res, 404, `trip with ID ${req.body.trip_id} doesnt exist`);
  }
  if (trpData.trip_date === req.body.trip_date){
    if (foundTrip) {
      return verifyTrip(trpData, resPonse, res, req.body.number_of_seats, book,
        tripdata(jwt.decode(req.headers.authorization), trpData, req.body.number_of_seats));
    }
  } resPonse.errorMessage(res, 404, `no trip is available on this date ${req.body.trip_date}`);
};
module.exports = createBooking;
