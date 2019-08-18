import resPonse from '../../helpers/responses/response';
import validateErr from './validateErr';

const Joi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const regeX = (/^[0-9]{9,12}$/);
const regeX2 = (/^[a-zA-Z0-9]{3,30}$/);
const regexText = (/^[a-zA-Z]{3,30}$/);
const validateError = (res, result) => validateErr(resPonse, res, result);
const JoiD = Joi.extend(Extension);
const validate = (values, validations) => Joi.validate(values, validations);

const Validator = {
  trip(req, res, next) {
    const result = validate(req.body, {
      seating_capacity: Joi.number().integer().min(14).max(80)
        .required()
        .label('seating capacity must be Only Integers with between 14 - 80'),
      bus_license_number: Joi.string().trim().alphanum().max(6)
        .required()
        .label('invalid Bus LicenseNumber with max of 6 characters'),
      origin: Joi.string().alphanum().regex(regexText).required()
        .label('invalid Origin Name and should contain only Alphabets'),
      destination: Joi.string().alphanum().regex(regexText).required()
        .label('invalid Destination Name'),
      trip_date: JoiD.date().format('DD-MM-YYYY').required()
        .label('only [DD-MM-YYYY] Date format is allowed '),
      fare: Joi.number().integer().min(15000)
        .max(50000)
        .required()
        .label('fare should be an integer and should be between 15000 - 50000'),
    });
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
  userSiginup(req, res, next){
    const result = validate(req.body, {
      first_name: Joi.string().trim().alphanum().regex(regexText)
        .required()
        .label('first Name is invalid'),
      last_name: Joi.string().trim().alphanum().regex(regexText)
        .required()
        .label('last Name is invalid'),
      email: Joi.string().email().required()
        .label('email is invalid'),
      phone: Joi.string().regex(regeX)
        .required()
        .label('invalid phone number and it should be integer between 9 - 12 numbers'),
      address: Joi.string().required().regex(regexText).min(6)
        .label('inavlid address, I should be alphabet'),
      password: Joi.string().trim().alphanum().regex(regexText)
        .trim()
        .min(6)
        .required()
        .label('please enter a valid password and it should be longer than six characters'),
    });
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
  userSignin(req, res, next){
    const result = validate(req.body, {
      email: Joi.string().email().required()
        .label('invalid Email'),
      password: Joi.string().required()
        .label('invalid Password'),
    });
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
  booking(req, res, next){
    const result = validate(req.body, {
      trip_id: Joi.number().integer()
        .required()
        .label('trip id should be an integer'),
      number_of_seats: Joi.number().integer().min(1).max(80)
        .required()
        .label('number of seats must be integers between 14 - 80'),
      trip_date: JoiD.date().format('MM-MM-YYYY').required()
        .label('only [DD-MM-YYYY] Date format is allowed '),
    });
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
};
module.exports = Validator;
