// Tips database
const trip = [];

// Trips Model
const Trip = {
  trip,
  tripData(
    id, // Integer
    seatingCapacity,
    busLicenseNumber,
    origin, // starting location
    destination,
    tripDate,
    fare,
    status, // active, cancelled - default is active
  ) {
    return {
      id,
      seatingCapacity,
      busLicenseNumber,
      origin,
      destination,
      tripDate,
      fare,
      status,
    };
  },

};

module.exports = Trip;
