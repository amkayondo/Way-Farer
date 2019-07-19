"use strict";

var _express = _interopRequireDefault(require("express"));

var _signup = _interopRequireDefault(require("../../controllers/users/signup"));

var _signin = _interopRequireDefault(require("../../controllers/users/signin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.post('/auth/signup', _signup["default"]);
userRouter.post('/auth/signin', _signin["default"]);
module.exports = userRouter;