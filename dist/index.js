"use strict";

var _express = _interopRequireDefault(require("express"));

var _port = _interopRequireDefault(require("./config/port"));

var _userRoutes = _interopRequireDefault(require("./routes/users/userRoutes"));

var _tripRouter = _interopRequireDefault(require("./routes/trips/tripRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import * as swaggerUI from 'swagger-ui-express';
// import doc from '../swagger.json';
var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded()); // app.use('/docs', swaggerUI.serve, swaggerUI.setup(doc));

app.get('/', function (req, res) {
  return res.status(200).json({
    message: 'navigate to /api/v1'
  });
});
app.use('/api/v1', _userRoutes["default"], _tripRouter["default"]); // eslint-disable-next-line no-console

app.listen(_port["default"], function () {
  return console.log("RUNNING ON PORT ".concat(_port["default"]));
});
module.exports = app;