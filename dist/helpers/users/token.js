"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var jwt = require('jsonwebtoken');

var createToken = function createToken(payload) {
  return jwt.sign(payload, 'THIS IS MY SECRETE', {
    expiresIn: '7d'
  });
};

var _default = createToken;
exports["default"] = _default;