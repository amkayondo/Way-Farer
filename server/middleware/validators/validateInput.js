import resPonse from '../../helpers/responses/response';

const Joi = require('@hapi/joi');
const Extension = require('@hapi/joi-date');

const regeX = (/^[0-9]{2,5}$/);
const regeX2 = (/^[a-zA-Z0-9]{3,30}$/);
const JoiD = Joi.extend(Extension);
const validate = (values, validations) => Joi.validate(values, validations);
const Validator = {
  trip(req, res, next) {
    const result = validate(req.body, {
      seatingcapacity: Joi.string().trim().regex(regeX)
        .required()
        .label('Only Integers are allowed'),
      buslicensenumber: Joi.string().trim().alphanum()
        .required()
        .label('Invalid Bus LicenseNumber'),
      origin: Joi.string().alphanum().required()
        .label('Invalid Origin Name'),
      destination: Joi.string().alphanum().required()
        .label('Invalid Destination Name'),
      tripdate: JoiD.date().format('DD-MM-YYYY').required()
        .label('Only [DD-MM-YYYY] Date format is allowed '),
      fare: Joi.string().trim().regex(regeX).label('Invalid Input')
        .required()
        .label('Fare should be an integer'),
    });
    if (result.error) {
      return resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
    }
    next();
  },
  userSiginup(req, res, next){
    const result = validate(req.body, {
      firstname: Joi.string().trim().alphanum()
        .required()
        .label('First Name is invalid'),
      lastname: Joi.string().trim().alphanum()
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
      return resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
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
      return resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
    }
    next();
  },
  booking(req, res, next){
    const result = validate(req.body, {
      tripId: Joi.string().trim().regex(regeX)
        .required()
        .label('trip id should be an integer'),
      numberOfSeats: Joi.string().trim().regex(regeX).label('Invalid Input')
        .required()
        .label('Number of seats must be integers'),
      tripDate: JoiD.date().format('MM-MM-YYYY').required()
        .label('Only [DD-MM-YYYY] Date format is allowed '),
    });
    if (result.error) {
      return resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
    }
    next();
  },
};
module.exports = Validator;
