import resPonse from '../../helpers/responses/response';
import validateErr from './validateErr';

const Joi = require('@hapi/joi');

const validateError = (res, result) => validateErr(resPonse, res, result);
const validate = (values, validations) => Joi.validate(values, validations);
const ValidateReq = {
  validId(req, res, next){
    const querySchema = Joi.object().keys({
      tripId: Joi.number().integer()
        .label('Trip Id must be an integer'),
    });
    const result = validate(req.params, querySchema);
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
};
module.exports = ValidateReq;
