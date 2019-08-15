import Trip from './trips';
import Database from '../database/wayFareDb';

const db = new Database();
const newTrip = new Trip();
export default class Book {
  async createNewBooking(bookingData) {
    const booking = [
      bookingData.user_id,
      bookingData.bus_license_number,
      bookingData.trip_date,
      bookingData.number_of_Seats,
      bookingData.first_name,
      bookingData.last_name,
      bookingData.email,
    ];
    const result = await db.addNewBooking(booking);
    return result;
  }

  async decreaseNumberOfSeats(tripId, seatsAvailable, newSeats) {
    const newData = parseInt(seatsAvailable - newSeats);
    console.log(newData);
    const result = await db.updateBookings(tripId, newData);
    return result;
  }

  async getAtllbookings(){
    const allbookings = await db.getAllItems('bookings');
    return allbookings;
  }

  async increaseNumberOfSeats(findTrip, seats) {
    return parseInt(findTrip + seats);
  }

  async checkIfTripExists(trip_id) {
    const result = await newTrip.getTripById(trip_id);
    return result;
  }

  async checkForLicence(busLicenseNumber) {
    return newTrip.findTripByLicence(busLicenseNumber);
  }

  async checkIfTripDateIsValid(Date) {
    return newTrip.findTripDate(Date);
  }

  async checkBookingUser(userid) {
    // return this.getAtllbookings.find(x => x.userId === userid);
  }

  async getUserBookings(userid) {
    // return bookingDatabase.filter(x => x.userId === userid);
  }

  async findBooking(bookid) {
    // return bookingDatabase.find(x => x.bookingId === bookid);
  }
}
