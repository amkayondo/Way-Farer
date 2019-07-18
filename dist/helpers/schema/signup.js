"use strict";

var signUpSchema = function signUpSchema(Joi) {
  return Joi.object().keys({
    first_name: Joi.string().min(3).alphanum().required(),
    last_name: Joi.string().min(3).alphanum().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });
};

module.exports = signUpSchema;