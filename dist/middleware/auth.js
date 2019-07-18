"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _response = _interopRequireDefault(require("../helpers/responses/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appAuth = function appAuth(req, res, next) {
  try {
    var header = req.headers.authorization;

    if (!header || header === "") {
      return _response["default"].errorMessage(res, 401, "Unauthorized access");
    }

    var token = _jsonwebtoken["default"].verify(header, 'process.env.SECRETE_KEY');

    req.user = token;
    next();
  } catch (_unused) {
    _response["default"].errorMessage(res, 400, 'Invalid token');
  }
};

module.exports = appAuth;