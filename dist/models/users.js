"use strict";

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// User Database
var userDataBase = [{
  id: _uuid["default"].v4(),
  firstName: 'I am',
  lastName: 'admin',
  email: 'admin@app.com',
  password: 'admin123',
  isAdmin: true
}]; // User Model

var User = {
  userDataBase: userDataBase,
  // User data structure
  userData: function userData(id, firstName, lastName, email, password, isAdmin) {
    return {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      isAdmin: isAdmin
    };
  },
  // FInd User
  findUser: function findUser(data_) {
    return userDataBase.find(function (x) {
      return x.email === data_;
    });
  },
  // create new user
  createNewUser: function createNewUser(userInfo) {
    var data = this.userData(userInfo.id, userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.password, userInfo.isAdmin);
    userDataBase.push(data);
  }
};
module.exports = User;