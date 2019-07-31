const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const JoiD = BaseJoi.extend(Extension);

const trip = () => Joi => Joi.object().keys({
  seatingCapacity: Joi.number().min(20).max(58).required(),
  busLicenseNumber: Joi.string().trim().alphanum()
    .min(5)
    .max(10)
    .required(),
  origin: Joi.string().alphanum().required()
    .regex(/^[a-zA-Z0-9!@#$%&*]{3,25}$/),
  destination: Joi.string().alphanum().required(),
  tripDate: JoiD.date().format('MM-MM-YYYY'),
  fare: Joi.number().min(35000).max(70000).required(),
});

const tripSchema = trip();
module.exports = tripSchema;
