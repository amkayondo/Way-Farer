/* eslint-disable radix */
import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';
import tripSchema from '../../helpers/schema/trip';

const createTrip = (req, res) => {
  // const inputData = req.body;
  const {
    seatingcapacity, buslicensenumber, origin, destination, tripdate, fare,
  } = req.body;

  const avSeats = seatingcapacity;
  const data = Trip.tripData(
    parseInt(seatingcapacity), parseInt(avSeats),
    buslicensenumber,
    origin, destination, tripdate,
    parseInt(fare), 'active',
  );
  const newTrip = [
    data.seatingcapacity,
    data.availableSeats,
    data.buslicensenumber,
    data.origin,
    data.destination,
    data.fare,
    data.tripdate,
    data.status,
  ];
  // const isBus = Trip.getTripBylicence(buslicensenumber);
  // if (isBus) {
  //   return resPonse.errorMessage(
  //     res, 400,
  //     `A bus with License Number ${buslicensenumber} is already booked`,
  //   );
  // }
  console.log(newTrip);
  Trip.creatAtrip(newTrip);
  return resPonse.successData(res, 201, data);
};
module.exports = createTrip;
