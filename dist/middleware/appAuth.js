"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _response = _interopRequireDefault(require("../helpers/responses/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appAuth = function appAuth(req, res, next) {
  try {
    var header = req.headers.authorization;

    if (!header || header === '') {
      return _response["default"].errorMessage(res, 401, 'Unauthorized access');
    }

    _jsonwebtoken["default"].verify(header, 'THIS IS MY SECRETE', {
      expiresIn: '7d'
    });

    next();
  } catch (error) {
    _response["default"].errorMessage(res, 400, 'Invalid token');
  }

  return true;
};

module.exports = appAuth;