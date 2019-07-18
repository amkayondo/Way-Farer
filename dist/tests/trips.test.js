"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _mocha = require("mocha");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// const uuid = require('uuid');
_chai["default"].use(_chaiHttp["default"]);

(0, _mocha.describe)('TRIPS TESTS', function () {
  (0, _mocha.it)('should return a string', function (done) {
    _chai["default"].request(_index["default"]).get('/').end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(200);
    });

    done();
  });
});