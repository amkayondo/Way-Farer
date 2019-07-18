import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';
import tripSchema from '../../helpers/schema/trip';

const uuid = require('uuid');

const createTrip = (req, res) => {
  const inputData = req.body;
  const data = Trip.tripData(
    uuid.v4(), req.body.seatingCapacity, req.body.busLicenseNumber,
    req.body.origin, req.body.destination, req.body.tripDate,
    req.body.fare, 'active',
  );
  const schema = tripSchema(Joi);
  Joi.validate(inputData, schema, (error) => {
    if (error) {
      return resPonse.errorMessage(res, 400, (error.details[0].message));
    }
    Trip.creatAtrip(data);
    resPonse.successData(res, 'Trip successfully created', 201, data);
    return true;
  });
};
module.exports = createTrip;
