"use strict";

var _response = _interopRequireDefault(require("../../helpers/responses/response"));

var _trips = _interopRequireDefault(require("../../models/trips"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var trips = _trips["default"].tripDataBase;

var getAllTrips = function getAllTrips(req, res, next) {
  var destination = req.query.destination;

  if (trips.length === 0) {
    return _response["default"].errorMessage(res, 200, 'Not trips available');
  }

  try {
    var foundDestination = _trips["default"].findQueryByDestination(destination);

    if (foundDestination.length >= 1) {
      return _response["default"].successData(res, 200, foundDestination);
    }

    next(); // eslint-disable-next-line no-empty
  } catch (error) {}

  return true;
};

module.exports = getAllTrips;