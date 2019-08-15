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
    const result = await db.updateBookings(tripId, newData);
    return result;
  }

  async increaseNumberOfSeats(tripId, seatsAvailable, newSeats) {
    const newData = seatsAvailable + newSeats;
    console.log(newData);
    console.log(seatsAvailable);
    console.log(newSeats);

    const result = await db.updateBookings(tripId, newData);
    return result;
  }

  async getAtllbookings(){
    const allbookings = await db.getAllItems('bookings');
    return allbookings;
  }


  async checkIfTripExists(bus_license_number, trip_date) {
    const result = await newTrip.getTripBylience(bus_license_number, trip_date);
    return result;
  }

  async checkIfTripExistsById(tripId) {
    const result = await newTrip.getById(tripId);
    return result;
  }

  async checkForLicence(busLicenseNumber) {
    return newTrip.findTripByLicence(busLicenseNumber);
  }

  async checkIfTripDateIsValid(Date) {
    return newTrip.findTripDate(Date);
  }

  async deleteBookingByUser(booking_id, user_id){
    const result = await db.deleteBooking(booking_id, user_id);
    return result;
  }

  async checkBookingUser(userid) {
    // return this.getAtllbookings.find(x => x.userId === userid);
  }

  async deleteUserBookings(userid, booking_id) {
    const userBookings = await db.deleteBookingsByUser(userid, booking_id);
    return userBookings;
  }

  async findBooking(bookid) {
    // return bookingDatabase.find(x => x.bookingId === bookid);
  }
}
