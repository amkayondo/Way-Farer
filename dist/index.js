"use strict";

var _express = _interopRequireDefault(require("express"));

var swaggerUI = _interopRequireWildcard(require("swagger-ui-express"));

var _port = _interopRequireDefault(require("./config/port"));

var _swagger = _interopRequireDefault(require("../swagger.json"));

var _userRoutes = _interopRequireDefault(require("./routes/users/userRoutes"));

var _tripRouter = _interopRequireDefault(require("./routes/trips/tripRouter"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(_swagger["default"]));
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