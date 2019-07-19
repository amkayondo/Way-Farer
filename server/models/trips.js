// Tips database
const tripDataBase = [];
// Trips Model
const Trip = {
  tripDataBase,
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
  creatAtrip(tripData) {
    return tripDataBase.push(tripData);
  },
  findTrip(tripInput) {
    return tripDataBase.find(x => x.id === tripInput);
  },
  findQueryByDestination(query) {
    const item = tripDataBase.filter(x => x.destination === query);
    return item;
  },

};

module.exports = Trip;
