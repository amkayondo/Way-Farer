"use strict";

var _express = _interopRequireDefault(require("express"));

var _create_trip = _interopRequireDefault(require("../../controllers/trips/create_trip"));

var _appAuth = _interopRequireDefault(require("../../middleware/appAuth"));

var _isAdmin = _interopRequireDefault(require("../../middleware/isAdmin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var tripRouter = _express["default"].Router(); // auth works
// tripRouter.post('/trips', appAuth, createTrip);


tripRouter.post('/trips', _appAuth["default"], _isAdmin["default"], _create_trip["default"]);
module.exports = tripRouter;