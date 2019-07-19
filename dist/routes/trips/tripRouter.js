"use strict";

var _express = _interopRequireDefault(require("express"));

var _createTrip = _interopRequireDefault(require("../../controllers/trips/createTrip"));

var _getTripbyId = _interopRequireDefault(require("../../controllers/trips/getTripbyId"));

var _getTrips = _interopRequireDefault(require("../../controllers/trips/getTrips"));

var _queryTrips = _interopRequireDefault(require("../../controllers/trips/queryTrips"));

var _appAuth = _interopRequireDefault(require("../../middleware/appAuth"));

var _isAdmin = _interopRequireDefault(require("../../middleware/isAdmin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tripRouter = _express["default"].Router();

tripRouter.get('/trips/:tripId', _getTripbyId["default"]);
tripRouter.post('/trips', _appAuth["default"], _isAdmin["default"], _createTrip["default"]);
tripRouter.get('/trips', _queryTrips["default"], _getTrips["default"]);
module.exports = tripRouter;