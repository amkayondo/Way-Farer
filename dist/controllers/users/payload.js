"use strict";

// Pay load
var payLoad = function payLoad(id, firstName, lastName, email, password, isAdmin) {
  return {
    id: id,
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    isAdmin: isAdmin
  };
};

module.exports = payLoad;