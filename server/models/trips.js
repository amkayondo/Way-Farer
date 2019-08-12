import Databse from '../database/wayFareDb';

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
  async creatAtrip(tripData) {
    const result = await db.addNewTrip(tripData);
    return result;
  },
  async findTrip(tripInput) {
    const result = await db.selectItemById('trips', tripInput);
    return result;
  },
  async getAllTrips() {
    const result = await db.getAllItems('trips');
    return result;
  },

};

module.exports = Trip;
