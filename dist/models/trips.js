"use strict";

// Tips database
var tripDataBase = []; // Trips Model

var Trip = {
  tripDataBase: tripDataBase,
  tripData: function tripData(id, // Integer
  seatingCapacity, busLicenseNumber, origin, // starting location
  destination, tripDate, fare, status) // active, cancelled - default is active
  {
    return {
      id: id,
      seatingCapacity: seatingCapacity,
      busLicenseNumber: busLicenseNumber,
      origin: origin,
      destination: destination,
      tripDate: tripDate,
      fare: fare,
      status: status
    };
  },
  creatAtrip: function creatAtrip(tripData) {
    return tripDataBase.push(tripData);
  }
};
module.exports = Trip;