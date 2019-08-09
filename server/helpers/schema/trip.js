const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const JoiD = BaseJoi.extend(Extension);

const trip = () => Joi => Joi.object().keys({
  seatingCapacity: Joi.string().trim().regex(/^[0-9]{2,5}$/)
    .required()
    .label('Only Integers are allowed'),
  busLicenseNumber: Joi.string().trim().alphanum()
    .required()
    .label('Invalid Bus LicenseNumber'),
  origin: Joi.string().alphanum().required()
    .label('Invalid Origin Name'),
  destination: Joi.string().alphanum().required()
    .label('Invalid Destination Name'),
  tripDate: JoiD.date().format('DD-MM-YYYY').required()
    .label('Only [DD-MM-YYYY] Date format is allowed '),
  fare: Joi.string().trim().regex(/^[0-9]{2,5}$/).label('Invalid Input')
    .required()
    .label('Fare should be an integer'),
});

const tripSchema = trip();
module.exports = tripSchema;
