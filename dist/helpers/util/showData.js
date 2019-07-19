"use strict";

var showData = function showData(val) {
  return {
    id: "".concat(val.id),
    firstName: "".concat(val.firstName),
    lastName: "".concat(val.lastName),
    email: "".concat(val.email),
    isAdmin: "".concat(val.isAdmin)
  };
};

module.exports = showData;