"use strict";

// Responses
var resPonse = {
  errorMessage: function errorMessage(res, statusCode, message) {
    return res.status(statusCode).json({
      status: statusCode,
      error: message
    });
  },
  successUser: function successUser(res, message, statusCode, neededData, token) {
    return res.status(statusCode).json({
      status: statusCode,
      message: message,
      data: neededData,
      token: token
    });
  },
  successData: function successData(res, message, statusCode, data) {
    return res.status(statusCode).json({
      status: statusCode,
      message: message,
      data: data
    });
  }
};
module.exports = resPonse;