"use strict";

var trip = function trip() {
  return function (Joi) {
    return Joi.object().keys({
      seatingCapacity: Joi.number().required(),
      busLicenseNumber: Joi.string().required(),
      origin: Joi.string().required(),
      destination: Joi.string().required(),
      tripDate: Joi.string().required(),
      fare: Joi.number().required(),
      status: Joi.string().required()
    });
  };
};

var tripSchema = trip();
module.exports = tripSchema;