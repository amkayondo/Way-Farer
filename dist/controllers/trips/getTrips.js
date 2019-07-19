"use strict";

var _response = _interopRequireDefault(require("../../helpers/responses/response"));

var _trips = _interopRequireDefault(require("../../models/trips"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var trips = _trips["default"].tripDataBase;

var getAllTrips = function getAllTrips(req, res) {
  _response["default"].successData(res, 200, trips);

  return true;
};

module.exports = getAllTrips;