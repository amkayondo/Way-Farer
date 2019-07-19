"use strict";

var _response = _interopRequireDefault(require("../../helpers/responses/response"));

var _trips = _interopRequireDefault(require("../../models/trips"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// resPonse.successData(res, 200, trips);
var trips = _trips["default"].tripDataBase;

var getAllTrips = function getAllTrips(req, res) {
  var destination = req.query.destination;

  var foundDestination = _trips["default"].findQueryByDestination(destination);

  if (trips.length !== 0) {
    if (foundDestination) {
      _response["default"].successData(res, 200, foundDestination);
    } else {
      _response["default"].errorMessage(res, 200, 'No trips found');
    }
  } else {
    _response["default"].successData(res, 200, trips);
  }

  _response["default"].errorMessage(res, 200, 'No trips available');
};

module.exports = getAllTrips;