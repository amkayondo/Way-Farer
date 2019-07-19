"use strict";

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _users = _interopRequireDefault(require("../../models/users"));

var _token = _interopRequireDefault(require("../../helpers/users/token"));

var _response = _interopRequireDefault(require("../../helpers/responses/response"));

var _signup = _interopRequireDefault(require("../../helpers/schema/signup"));

var _payload = _interopRequireDefault(require("./payload"));

var _showData = _interopRequireDefault(require("../../helpers/util/showData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var uuid = require('uuid');

var newUser = _users["default"];

var signUp = function signUp(req, res) {
  var data = (0, _payload["default"])(uuid.v4(), req.body.first_name, req.body.last_name, req.body.email, req.body.password, false);
  var payload = data;
  var inputData = req.body;
  var schema = (0, _signup["default"])(_joi["default"]);

  _joi["default"].validate(inputData, schema, function (error) {
    if (error) {
      return _response["default"].errorMessage(res, 400, error.details[0].message);
    }

    var token = (0, _token["default"])(payload);
    res.header('Authorization', token);
    var userExists = newUser.findUser(data.email);

    if (userExists) {
      return _response["default"].errorMessage(res, 400, 'User with the same email exists');
    }

    newUser.createNewUser(data);
    var userAcct = (0, _showData["default"])(data);

    _response["default"].successUser(res, 200, userAcct, token);

    return true;
  });
};

module.exports = signUp;