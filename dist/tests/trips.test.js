"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _mocha = require("mocha");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var user = {
  email: 'admin@app.com',
  password: 'admin123'
};
var userToken;
var notAdminToken;
var tripId;
var tripData = {
  seatingCapacity: 50,
  busLicenseNumber: 'UGX HD',
  origin: 'Kampala',
  destination: 'Kigali',
  tripDate: '2.2.2019',
  fare: 20000,
  status: 'active'
};

_chai["default"].use(_chaiHttp["default"]);

(0, _mocha.before)(function (done) {
  _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(user).end(function (err, res) {
    if (err) done(err);
    userToken = res.body.token;
    done();
  });
});
(0, _mocha.before)(function (done) {
  _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send({
    first_name: 'kayondo',
    last_name: 'edward',
    email: 'kayondo@amkayondo.co',
    password: 'vbcbcbcb'
  }).end(function (err, res) {
    if (err) done(err);
    notAdminToken = res.body.token;
    done();
  });
});
(0, _mocha.describe)('TRIPS TESTS', function () {
  (0, _mocha.it)('should create a trip', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/trips').set('Authorization', userToken).send(tripData).end(function (err, res) {
      tripId = res.body.data.id;
      (0, _chai.expect)(res).to.have.status(201);
      done();
    });
  });
  (0, _mocha.it)('should return error if token is Invalid', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/trips').set('Authorization', 'kdfhdsfhdsfhdhfkfhdf').send(tripData).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(400);
      done();
    });
  });
  (0, _mocha.it)('should return error if token is unathorized', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/trips').set('Authorization', notAdminToken).send(tripData).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(401);
      (0, _chai.expect)(res.body.error).to.deep.equal('Unauthorized access');
      done();
    });
  });
  (0, _mocha.it)('should return error if token is unathorized', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/trips').set('Authorization', '').send(tripData).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(401);
      (0, _chai.expect)(res.body.error).to.deep.equal('Unauthorized access');
      done();
    });
  });
  (0, _mocha.it)('should return error if a field is missing', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/trips').set('Authorization', userToken).send({
      seatingCapacity: 50,
      busLicenseNumber: 'UGX HD',
      fare: 20000,
      status: 'active'
    }).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(400);
      done();
    });
  });
  (0, _mocha.it)('should return error if trip not found', function (done) {
    _chai["default"].request(_index["default"]).get("/api/v1/trips/".concat(2323232)).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(400);
      done();
    });
  });
  (0, _mocha.it)('should return trip if found', function (done) {
    _chai["default"].request(_index["default"]).get("/api/v1/trips/".concat(tripId)).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(200);
      done();
    });
  });
});