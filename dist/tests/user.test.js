"use strict";

var _chai = _interopRequireWildcard(require("chai"));

var _mocha = require("mocha");

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var uuid = require('uuid');

_chai["default"].use(_chaiHttp["default"]);

var newUser = {
  first_name: 'kayondo',
  last_name: 'edward',
  email: 'kayondo@open.co',
  password: '23456'
};
var siginUser = {
  email: 'kayondo@open.co',
  password: '23456'
};
var invalidUser = {
  email: 'tom@open.co',
  password: '23s456'
};
var invalidPassword = {
  email: 'kayondo@open.co',
  password: '23dsdd456'
}; // const newToken = createToken(newUser);

(0, _mocha.describe)('USERS TESTS', function () {
  (0, _mocha.it)('should return a string', function (done) {
    _chai["default"].request(_index["default"]).get('/').end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(200);
    });

    done();
  });
  (0, _mocha.it)('should create an account', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(newUser).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(200);
    });

    done();
  });
  (0, _mocha.it)('should return erron if email exists on create an account', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(newUser).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(400);
    });

    done();
  });
  (0, _mocha.it)('should login user', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(siginUser).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(200);
    });

    done();
  });
  (0, _mocha.it)('should return error if user doesnt exist on login', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(invalidUser).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(400);
    });

    done();
  });
  (0, _mocha.it)('should return error if password is invalid', function (done) {
    _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(invalidPassword).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(400);
    });

    done();
  });
  (0, _mocha.it)('should return an error when email not given', function (done) {
    var noEmail = {
      id: uuid.v4(),
      firstName: 'kayondo',
      lastName: 'edward',
      password: '23456',
      admin: false
    };

    _chai["default"].request(_index["default"]).post('/api/v1/auth/signup').send(noEmail).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(400);
    });

    done();
  });
  (0, _mocha.it)('should return an error when fields not given', function (done) {
    var noEmail = {
      password: '23456',
      admin: false
    };

    _chai["default"].request(_index["default"]).post('/api/v1/auth/signin').send(noEmail).end(function (err, res) {
      (0, _chai.expect)(res).to.have.status(400);
    });

    done();
  });
});