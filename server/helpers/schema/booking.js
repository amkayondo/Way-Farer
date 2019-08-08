const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const JoiD = BaseJoi.extend(Extension);

const bookingSchema = Joi => Joi.object().keys({
  busLicenseNumber: Joi.string().alphanum()
    .uppercase()
    .required(),
  numberOfSeats: Joi.string().trim().regex(/^[0-9]{1,5}$/).label('Invalid Input')
    .required(),
  tripDate: JoiD.date().format('MM-MM-YYYY').required(),
});

module.exports = bookingSchema;
