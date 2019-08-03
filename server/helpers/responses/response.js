// Responses
const resPonse = {
  errorMessage(res, statusCode, error) {
    return res.status(statusCode).json({
      status: statusCode,
      error,
    });
  },
  successUser(res, statusCode, neededData, token) {
    return res.status(statusCode).json({
      status: statusCode,
      data: neededData,
      token,
    });
  },
  successData(res, statusCode, data) {
    return res.status(statusCode).json({
      status: statusCode,
      data,
    });
  },
  successWithNoData(res, statusCode, message) {
    return res.status(statusCode).json({
      status: statusCode,
      message,
    });
  },

};
module.exports = resPonse;
