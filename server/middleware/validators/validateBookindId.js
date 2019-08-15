import resPonse from '../../helpers/responses/response';
import validateErr from './validateErr';

const Joi = require('@hapi/joi');

const validateError = (res, result) => validateErr(resPonse, res, result);
const validate = (values, validations) => Joi.validate(values, validations);

const ValidateReqBooking = {
  validBookingId(req, res, next){
    const qury = Joi.object().keys({
      bookingId: Joi.number().integer()
        .label('Booking Id must be an integer'),
    });
    const result = validate(req.params, qury);
    if (result.error) {
      return validateError(res, result);
    }
    next();
  },
};
module.exports = ValidateReqBooking;
