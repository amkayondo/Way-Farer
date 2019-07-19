"use strict";

var _response = _interopRequireDefault(require("../../helpers/responses/response"));

var _trips = _interopRequireDefault(require("../../models/trips"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getTripbyId = function getTripbyId(req, res) {
  var inpuT = req.params.tripId;

  var foundTrip = _trips["default"].findTrip(inpuT);

  if (foundTrip) {
    return _response["default"].successData(res, 200, foundTrip);
  }

  _response["default"].errorMessage(res, 400, "Not Trip found with Id ".concat(inpuT));

  return true;
};

module.exports = getTripbyId;