// Responses
const resPonse = {
  errorMessage(res, statusCode, message) {
    return res.status(statusCode).json({
      status: statusCode,
      error: message,
    });
  },
  successUser(res, message, statusCode, neededData, token) {
    return res.status(statusCode).json({
      status: statusCode,
      message,
      data: neededData,
      token,
    });
  },
  successData(res, message, statusCode, data) {
    return res.status(statusCode).json({
      status: statusCode,
      message,
      data,
    });
  },

};
module.exports = resPonse;
