/* eslint-disable object-property-newline */
// Tips database
const tripDataBase = [];
// Trips Model
const Trip = {
  tripDataBase,
  tripData(id, seatingCapacity, busLicenseNumber, origin, destination, tripDate, fare, status) {
    return {
      id, seatingCapacity, busLicenseNumber,
      origin, destination, tripDate, fare, status,
    };
  },
  creatAtrip(tripData) {
    return tripDataBase.push(tripData);
  },
  findTrip(tripInput) {
    return tripDataBase.find(x => x.id === tripInput);
  },
  findbusLicenseNumber(LicenceInput) {
    return tripDataBase.find(x => x.busLicenseNumber === LicenceInput);
  },
  findTripDate(inputTripDate) {
    return tripDataBase.find(x => x.tripDate === inputTripDate);
  },
  findQueryByDestination(query) {
    return tripDataBase.filter(x => x.destination === query);
  },
  findQueryByOrigin(oquery) {
    return tripDataBase.filter(x => x.origin === oquery);
  },

};

module.exports = Trip;
