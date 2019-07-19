"use strict";

var BaseJoi = require('@hapi/joi');

var Extension = require('@hapi/joi-date');

var JoiD = BaseJoi.extend(Extension);

var trip = function trip() {
  return function (Joi) {
    return Joi.object().keys({
      seatingCapacity: Joi.number().min(10).required(),
      busLicenseNumber: Joi.string().alphanum().min(3).max(30).required(),
      origin: Joi.string().alphanum().required().regex(/^[a-zA-Z0-9!@#$%&*]{3,25}$/),
      destination: Joi.string().alphanum().required(),
      tripDate: JoiD.date().format('YYYY-MM-DD'),
      fare: Joi.number().min(5).required()
    });
  };
};

var tripSchema = trip();
module.exports = tripSchema;