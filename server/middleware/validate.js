import Joi from '@hapi/joi';

// const schema = (requ, valid) => ({ requ: valid });
// Validate
// eslint-disable-next-line import/prefer-default-export
export const validateEmail = (req, res, next) => {
  const data = req.body;

  // declare the validation
  const schema = Joi.object().keys({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  // Validate
  Joi.validate(data, schema, (err, value) => {
    if (err) {
      return res.json({
        error: err.details[0].message,
      });
    }
  });
  next();
};
