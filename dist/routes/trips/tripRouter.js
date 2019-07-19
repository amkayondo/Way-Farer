"use strict";

var _express = _interopRequireDefault(require("express"));

var _createTrip = _interopRequireDefault(require("../../controllers/trips/createTrip"));

var _getTripbyId = _interopRequireDefault(require("../../controllers/trips/getTripbyId"));

var _getAllTrips = _interopRequireDefault(require("../../controllers/trips/getAllTrips"));

var _appAuth = _interopRequireDefault(require("../../middleware/appAuth"));

var _isAdmin = _interopRequireDefault(require("../../middleware/isAdmin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tripRouter = _express["default"].Router();

tripRouter.get('/trips/:tripId', _getTripbyId["default"]);
tripRouter.post('/trips', _appAuth["default"], _isAdmin["default"], _createTrip["default"]);
tripRouter.get('/trips', _getAllTrips["default"]);
module.exports = tripRouter;