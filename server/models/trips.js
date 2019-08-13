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
    try {
      const result = await db.addNewTrip(tripData);
      return result;
    } catch (err) {}
  },
  async findTrip(tripInput) {
    try {
      const result = await db.selectItemById('trips', 'tripid', tripInput);
      return result;
    } catch (err) {}
  },
  async updateTripStatus(tripId, staTus){
    try {
      const foundTrip = await db.updateTrip(staTus, tripId);
      return foundTrip;
    } catch (err){}
  },
  async getAllTrips() {
    try {
      const result = await db.getAllItems('trips');
      return result;
    } catch (err) {}
  },
  async getTripBylience(liecence, tripdate){
    try {
      const foundt = await db.getTripBylicence(liecence, tripdate);
      return foundt;
    } catch (err){}
  },

};

module.exports = Trip;
