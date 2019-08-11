/* eslint-disable radix */
import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';
import tripSchema from '../../helpers/schema/trip';

const createTrip = (req, res) => {
  // const inputData = req.body;
  const {
    seatingcapacity, busLicensenumber, origin, destination, tripDate, fare,
  } = req.body;
  const avSeats = seatingcapacity;
  const data = Trip.tripData(
    parseInt(seatingcapacity), parseInt(avSeats), busLicensenumber,
    origin, destination, tripDate,
    parseInt(fare), 'active',
  );
  // seatingcapacity, buslicensenumber, origin,
  //       fare, destination, tripdate, status
  const newTrip = [
    data.seatingcapacity,
    data.availableSeats,
    data.buslicensenumber,
    data.origin,
    data.destination,
    data.tripdate,
    data.fare,
    data.status,
  ];
  // const isBus = Trip.getTripBylicence(busLicensenumber);
  // if (isBus) {
  //   return resPonse.errorMessage(
  //     res, 400,
  //     `A bus with License Number ${busLicensenumber} is already booked`,
  //   );
  // }

  Trip.creatAtrip(newTrip);
  return resPonse.successData(res, 201, data);
};
module.exports = createTrip;
