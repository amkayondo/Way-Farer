const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const JoiD = BaseJoi.extend(Extension);

const trip = () => Joi => Joi.object().keys({
  seatingCapacity: Joi.string().trim().regex(/^[0-9]{2,5}$/)
    .required(),
  busLicenseNumber: Joi.string().trim().alphanum()
    .required(),
  origin: Joi.string().alphanum().required(),
  destination: Joi.string().alphanum().required(),
  tripDate: JoiD.date().format('DD-MM-YYYY').required(),
  fare: Joi.string().trim().regex(/^[0-9]{2,5}$/)
    .required(),
});

const tripSchema = trip();
module.exports = tripSchema;
