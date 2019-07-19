// Responses
const resPonse = {
  errorMessage(res, statusCode, message) {
    return res.status(statusCode).json({
      status: statusCode,
      error: message,
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

};
module.exports = resPonse;
