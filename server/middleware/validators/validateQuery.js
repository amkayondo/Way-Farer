import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import validateErr from './validateErr';

const validateQuery = (req, res, next) => {
  const schema = Joi.object().keys({
    origin: Joi.string(),
    destination: Joi.string(),
  });
  const validateError = (res, result) => validateErr(resPonse, res, result);
  const validate = (values, validations) => Joi.validate(values, validations);
  const result = validate(req.query, schema);
  if (result.error) {
    return validateError(res, result);
  }
  next();
};
module.exports = validateQuery;
