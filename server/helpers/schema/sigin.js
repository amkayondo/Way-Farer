const signInSchema = (Joi) => {
  return Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
};

module.exports = signInSchema;