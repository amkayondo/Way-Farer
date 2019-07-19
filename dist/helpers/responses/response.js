"use strict";

// Responses
var resPonse = {
  errorMessage: function errorMessage(res, statusCode, message) {
    return res.status(statusCode).json({
      status: statusCode,
      error: message
    });
  },
  successUser: function successUser(res, statusCode, neededData, token) {
    return res.status(statusCode).json({
      status: statusCode,
      data: neededData,
      token: token
    });
  },
  successData: function successData(res, statusCode, data) {
    return res.status(statusCode).json({
      status: statusCode,
      data: data
    });
  }
};
module.exports = resPonse;