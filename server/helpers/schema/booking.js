const BaseJoi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const uuidV = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

const JoiD = BaseJoi.extend(Extension);

const bookingSchema = Joi => Joi.object().keys({
  tripId: Joi.string().trim().regex(uuidV)
    .required()
    .label('Invalid Trip Id'),
  numberOfSeats: Joi.string().trim().regex(/^[0-9]{1,5}$/).label('Invalid Input')
    .required()
    .label('Number of seats must be integers'),
  tripDate: JoiD.date().format('MM-MM-YYYY').required()
    .label('Only [DD-MM-YYYY] Date format is allowed '),
});

module.exports = bookingSchema;
