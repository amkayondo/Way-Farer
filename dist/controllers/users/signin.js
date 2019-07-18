"use strict";

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _users = _interopRequireDefault(require("../../models/users"));

var _token = _interopRequireDefault(require("../../helpers/users/token"));

var _response = _interopRequireDefault(require("../../helpers/responses/response"));

var _sigin = _interopRequireDefault(require("../../helpers/schema/sigin"));

var _payload = _interopRequireDefault(require("./payload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var newUser = _users["default"];

var signIn = function signIn(req, res) {
  var schema = (0, _sigin["default"])(_joi["default"]);

  _joi["default"].validate(req.body, schema, function (error) {
    if (error) {
      return _response["default"].errorMessage(res, 400, error.details[0].message);
    }

    var userExists = newUser.findUser(req.body.email.trim());

    if (!userExists) {
      return _response["default"].errorMessage(res, 400, 'Incorrect email');
    }

    var payld = (0, _payload["default"])(userExists.id, userExists.firstName, userExists.lastName, userExists.email, userExists.password, userExists.isAdmin);
    var data = {
      id: "".concat(payld.id),
      firstName: "".concat(payld.firstName),
      lastName: "".concat(payld.lastName),
      email: "".concat(payld.email),
      isAdmin: "".concat(payld.isAdmin)
    };
    var token = (0, _token["default"])(payld);
    if (!(userExists.password === req.body.password.trim())) return _response["default"].errorMessage(res, 400, 'Incorrect Password');
    res.header('Authorization', token);
    return _response["default"].successUser(res, 'Loggedin successfully', 200, data, token);
  });
};

module.exports = signIn;