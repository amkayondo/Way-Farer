const resPonse = {
  errorMessage(res, statusCode, error) {
    return res.status(statusCode).json({
      status: statusCode,
      error,
    });
  },
  successUser(res, statusCode, message, token) {
    return res.status(statusCode).json({
      status: statusCode,
      message,
      data: {
        token,
      },
    });
  },
  successData(res, statusCode, message, data) {
    return res.status(statusCode).json({
      status: statusCode,
      message,
      data,
    });
  },
  successDatas(res, statusCode, count, data) {
    return res.status(statusCode).json({
      status: statusCode,
      message: 'all trips successfully fetched',
      'Number of trips': count,
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
