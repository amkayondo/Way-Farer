"use strict";

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _response = _interopRequireDefault(require("../helpers/responses/response"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Check if User is an Admin
var isAdmin = function isAdmin(req, res, next) {
  try {
    var header = req.headers.authorization;

    var x = _jsonwebtoken["default"].decode(header, {
      complete: true
    });

    if (!x.payload.isAdmin === true) {
      return _response["default"].errorMessage(res, 401, 'Unauthorized access');
    }

    next(); // eslint-disable-next-line no-empty
  } catch (error) {}

  return true;
};

module.exports = isAdmin;