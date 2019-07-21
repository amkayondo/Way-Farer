const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const JoiD = BaseJoi.extend(Extension);

const bookingSchema = Joi => Joi.object().keys({
  busLicenseNumber: Joi.string().alphanum().min(3).max(30)
    .required(),
  tripDate: JoiD.date().format('MM-MM-YYYY').required(),
});

module.exports = bookingSchema;
