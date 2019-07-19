"use strict";

var _response = _interopRequireDefault(require("../../helpers/responses/response"));

var _trips = _interopRequireDefault(require("../../models/trips"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var trips = _trips["default"].tripDataBase;

var getAllTrips = function getAllTrips(req, res) {
  if (trips.length === 0) {
    return _response["default"].errorMessage(res, 200, 'No trips available at the moment');
  }

  _response["default"].successData(res, 200, trips);

  return true;
};

module.exports = getAllTrips;