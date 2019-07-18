const trip = () => Joi => Joi.object().keys({
  seatingCapacity: Joi.number().required(),
  busLicenseNumber: Joi.string().required(),
  origin: Joi.string().required(),
  destination: Joi.string().required(),
  tripDate: Joi.string().required(),
  fare: Joi.number().required(),
  status: Joi.string().required(),
});

const tripSchema = trip();
module.exports = tripSchema;
