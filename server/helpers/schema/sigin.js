const signInSchema = Joi => Joi.object().keys({
  email: Joi.string().email().required()
    .label('Invalid Email'),
  password: Joi.string().required()
    .label('Invalid Password'),
});

module.exports = signInSchema;
