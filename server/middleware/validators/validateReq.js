import resPonse from '../../helpers/responses/response';

const Joi = require('@hapi/joi');

const validateError = (res, result) => resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
const validate = (values, validations) => Joi.validate(values, validations);

const ValidateReq = {
  validId(req, res, next){
    const qury = Joi.object().keys({
      tripId: Joi.number().integer()
        .label('Trip Id must be an integer'),
    });
    const result = validate(req.params, qury);
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
};
module.exports = ValidateReq;
