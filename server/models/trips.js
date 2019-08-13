import Databse from '../database/wayFareDb';

const db = new Databse();

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
    const result = await db.selectItemById('trips', 'tripid', tripInput);
    return result;
  },
  async updateTripStatus(tripId, staTus){
    const foundTrip = await db.updateTrip(staTus, tripId);
    return foundTrip;
  },
  async getAllTrips() {
    const result = await db.getAllItems('trips');
    return result;
  },
  async getTripBylience(liecence, tripdate){
    const foundt = await db.getTripBylicence(liecence, tripdate);
    return foundt;
  },

};

module.exports = Trip;
