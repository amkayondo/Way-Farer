import Databse from '../database/wayFareDb';

const db = new Databse();

export default class Trip {
  async creatAtrip(tripData) {
    const newData = [
      tripData.seating_capacity,
      tripData.available_seats,
      tripData.bus_license_number,
      tripData.origin,
      tripData.destination,
      tripData.fare,
      tripData.trip_date,
      tripData.status,
    ];
    const result = await db.addNewTrip(newData);
    return result;
  }

  async findTrip(tripInput) {
    const result = await db.selectItemById('trips', 'trip_id', tripInput);
    return result;
  }

  async updateTripStatus(tripId, staTus){
    const foundTrip = await db.updateTrip(staTus, tripId);
    return foundTrip;
  }

  async getAllTrips() {
    const result = await db.getAllItems('trips');
    return result;
  }

  async getTripById(tripId){
    const foundt = await db.getTripByIdAndDate(tripId);
    return foundt;
  }

  async getTripBylience(licence, tripdate, status){
    const foundt = await db.getTripBylicence(licence, tripdate, status);
    return foundt;
  }

  async getById(tripId){
    const result = await db.getTripById(tripId);
    return result;
  }
}

module.exports = Trip;
