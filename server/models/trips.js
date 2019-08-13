import Databse from '../database/wayFareDb';

const db = new Databse();

export default class Trip {
  async creatAtrip(tripData) {
    const newData = [
      tripData.seatingcapacity,
      tripData.availableseats,
      tripData.buslicensenumber,
      tripData.origin,
      tripData.destination,
      tripData.fare,
      tripData.tripdate,
      tripData.status,
    ];
    const result = await db.addNewTrip(newData);
    return result;
  }

  async findTrip(tripInput) {
    const result = await db.selectItemById('trips', 'tripid', tripInput);
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

  async getTripBylience(liecence, tripdate){
    const foundt = await db.getTripBylicence(liecence, tripdate);
    return foundt;
  }
}

module.exports = Trip;
