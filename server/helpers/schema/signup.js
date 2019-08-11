import Joi from '@hapi/joi';

const signUpSchema = {
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
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(6)
    .required()
    .label('Please enter a valid password and it should be longer than six characters'),
};

module.exports = signUpSchema;
