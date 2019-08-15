const validateErr = (resPonse, res, result) => resPonse.errorMessage(res, 400, (`${result.error.details[0].message}`));
module.exports = validateErr;
