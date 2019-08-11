import Databse from './wayFareDb';

const db = new Databse();


// Trips Model
const Trip = {
  tripData(seatingcapacity, availableSeats,
    buslicensenumber, origin, destination, tripdate, fare, status) {
    return {
      seatingcapacity,
      availableSeats,
      buslicensenumber,
      origin,
      destination,
      tripdate,
      fare,
      status,
    };
  },
  creatAtrip(tripData) {
    return db.addNewTrip(tripData);
  },
  findTrip(tripInput) {
    return db.selectItemById('trips', tripInput);
  },
  getAllTrips() {
    return db.getAllItems('trips');
  },

};

module.exports = Trip;
