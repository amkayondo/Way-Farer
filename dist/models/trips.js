"use strict";

// Tips database
var trip = []; // Trips Model

var Trip = {
  trip: trip,
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
  }
};
module.exports = Trip;