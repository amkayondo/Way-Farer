const signUpSchema = Joi => Joi.object().keys({
  first_name: Joi.string().trim().alphanum()
    .required()
    .label('First Name is invalid'),
  last_name: Joi.string().trim().alphanum()
    .required()
    .label('Last Name is invalid'),
  email: Joi.string().email().required()
    .label('Email is invalid'),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(6)
    .required()
    .label('Please enter a valid password and it should be longer than six characters'),
});

module.exports = signUpSchema;
