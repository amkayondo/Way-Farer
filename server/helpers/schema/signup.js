const signUpSchema = Joi => Joi.object().keys({
  first_name: Joi.string().min(3).alphanum()
    .required(),
  last_name: Joi.string().min(3).alphanum()
    .required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).min(6).label('Invalid Input')
    .required(),
});

module.exports = signUpSchema;
