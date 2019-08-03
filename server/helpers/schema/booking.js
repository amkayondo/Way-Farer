const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const JoiD = BaseJoi.extend(Extension);

const bookingSchema = Joi => Joi.object().keys({
  busLicenseNumber: Joi.string().alphanum()
    .uppercase()
    .required(),
  numberOfSeats: Joi.number().integer().min(1).max(58)
    .required(),
  tripDate: JoiD.date().format('MM-MM-YYYY').required(),
});

module.exports = bookingSchema;
