"use strict";

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _response = _interopRequireDefault(require("../../helpers/responses/response"));

var _trips = _interopRequireDefault(require("../../models/trips"));

var _trip = _interopRequireDefault(require("../../helpers/schema/trip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var uuid = require('uuid');

var createTrip = function createTrip(req, res) {
  var inputData = req.body;

  var data = _trips["default"].tripData(uuid.v4(), req.body.seatingCapacity, req.body.busLicenseNumber, req.body.origin, req.body.destination, req.body.tripDate, req.body.fare, req.body.status);

  var schema = (0, _trip["default"])(_joi["default"]);

  _joi["default"].validate(inputData, schema, function (error) {
    if (error) {
      return _response["default"].errorMessage(res, 400, error.details[0].message);
    }

    _trips["default"].creatAtrip(data);

    _response["default"].successData(res, 'Trip successfully created', 201, data);

    return true;
  });
};

module.exports = createTrip;