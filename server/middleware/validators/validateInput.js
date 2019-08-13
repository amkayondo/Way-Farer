import resPonse from '../../helpers/responses/response';

const Joi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const regeX = (/^[0-9]{2,5}$/);
const regeX2 = (/^[a-zA-Z0-9]{3,30}$/);
const validateError = (res, result) => resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
const JoiD = Joi.extend(Extension);
const validate = (values, validations) => Joi.validate(values, validations);

const Validator = {
  trip(req, res, next) {
    const result = validate(req.body, {
      seating_capacity: Joi.string().trim().regex(regeX)
        .required()
        .label('Only Integers are allowed'),
      bus_license_number: Joi.string().trim().alphanum()
        .required()
        .label('Invalid Bus LicenseNumber'),
      origin: Joi.string().alphanum().required()
        .label('Invalid Origin Name'),
      destination: Joi.string().alphanum().required()
        .label('Invalid Destination Name'),
      trip_date: JoiD.date().format('DD-MM-YYYY').required()
        .label('Only [DD-MM-YYYY] Date format is allowed '),
      fare: Joi.string().trim().regex(regeX)
        .required()
        .label('Fare should be an integer'),
    });
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
  userSiginup(req, res, next){
    const result = validate(req.body, {
      first_name: Joi.string().trim().alphanum()
        .required()
        .label('First Name is invalid'),
      last_name: Joi.string().trim().alphanum()
        .required()
        .label('Last Name is invalid'),
      email: Joi.string().email().required()
        .label('Email is invalid'),
      phone: Joi.string().required()
        .label('Email is phone'),
      address: Joi.string().required()
        .label('Email is address'),
      password: Joi.string().regex(regeX2).min(6)
        .required()
        .label('Please enter a valid password and it should be longer than six characters'),
    });
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
  userSignin(req, res, next){
    const result = validate(req.body, {
      email: Joi.string().email().required()
        .label('Invalid Email'),
      password: Joi.string().required()
        .label('Invalid Password'),
    });
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
  booking(req, res, next){
    const result = validate(req.body, {
      trip_id: Joi.string().trim().regex(regeX)
        .required()
        .label('trip id should be an integer'),
      number_of_Seats: Joi.string().trim().regex(regeX).required()
        .label('Number of seats must be integers'),
      trip_date: JoiD.date().format('MM-MM-YYYY').required()
        .label('Only [DD-MM-YYYY] Date format is allowed '),
    });
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
};
module.exports = Validator;
