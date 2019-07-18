"use strict";

var findItem = function findItem(data, item, toCompare) {
  return data.find(item === toCompare);
};

module.exports = findItem;