/* eslint-disable radix */
import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';
import tripSchema from '../../helpers/schema/trip';

const uuid = require('uuid');

const createTrip = (req, res) => {
  const inputData = req.body;
  const {
    seatingCapacity, busLicenseNumber, origin, destination, tripDate, fare,
  } = req.body;
  const avSeats = seatingCapacity;
  const data = Trip.tripData(
    uuid.v4(), parseInt(seatingCapacity), parseInt(avSeats), busLicenseNumber,
    origin, destination, tripDate,
    parseInt(fare), 'active',
  );
  const schema = tripSchema(Joi);
  Joi.validate(inputData, schema, (error) => {
    if (error) {
      return resPonse.errorMessage(res, 400, (error.details[0].message));
    }
    const isBus = Trip.tripDataBase.find(x => x.busLicenseNumber === busLicenseNumber);
    if (isBus) {
      return resPonse.errorMessage(
        res, 400,
        `A bus with License Number ${busLicenseNumber} is already booked`,
      );
    }

    Trip.creatAtrip(data);
    return resPonse.successData(res, 201, data);
  });
};
module.exports = createTrip;
