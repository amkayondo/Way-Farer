import resPonse from '../../helpers/responses/response';

const Joi = require('@hapi/joi');

const validateError = (res, result) => resPonse.errorMessage(res, 400, (`${result.error.details[0].message}`));
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
