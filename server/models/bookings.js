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

  async updateNumberOfSeats(tripId, operation) {
    const newData = parseInt(operation);
    const result = await db.updateBookings(tripId, newData);
    return result;
  }

  async getAtllbookings(){
    const allbookings = await db.getAllItems('bookings');
    return allbookings;
  }


  async isTripExists(bus_license_number, trip_date, status) {
    const result = await newTrip.getTripBylience(bus_license_number, trip_date, status);
    return result;
  }

  async isTripIdExixts(tripId) {
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
    const userBookings = await db.getOnlyBookingsByUser(userid);
    return userBookings;
  }

  async getUserBookings(userid, booking_id) {
    const userBookings = await db.getBookingsByUser(userid, booking_id);
    return userBookings;
  }
}
