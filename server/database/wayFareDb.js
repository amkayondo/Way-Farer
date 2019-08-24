import dotenv from 'dotenv';
import Connection from '../config/dbEnv';

const pool = Connection.connectdb();

dotenv.config();

class Database {
  async selectItem(table, colomn, data){
    const result = await pool.query(`SELECT * FROM ${table} WHERE ${colomn}='${data}';`);
    return result;
  }

  async selectItemById(table, colom, id) {
    const result = this.selectItem(table, colom, id);
    return result;
  }

  async findUser(email){
    const result = this.selectItem('users', 'email', email);
    return result;
  }

  async getTripById(trip_id) {
    const result = this.selectItem('trips', 'trip_id', trip_id);
    return result;
  }

  async getTripBylicence(bus_license_number, tripDate, status) {
    const result = await pool.query(`SELECT * FROM trips WHERE bus_license_number='${bus_license_number}' 
    AND trip_date='${tripDate}' AND status='${status}';`);
    return result;
  }

  async getTripByIdAndDate(trip_id) {
    const result = await pool.query(`SELECT * 
    FROM trips WHERE trip_id=${trip_id};`);
    return result;
  }

  async addNewUser(data) {
    const result = await pool.query(`
      INSERT INTO users(first_name, last_name, 
      email, password, phone, address, isadmin)
      VALUES ($1, $2, $3, $4, $5, $6, $7) returning *;`, data);
    return result;
  }

  async addNewTrip(data) {
    const result = await pool.query(`INSERT INTO trips(
        seating_capacity, available_seats, bus_license_number,
        origin, destination, fare, trip_date, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *;`, data);
    return result;
  }

  async addNewBooking(data) {
    const result = await pool.query(`INSERT INTO bookings (
      user_id, bus_license_number, trip_date,
      number_of_Seats, first_name, last_name, email)
      VALUES ($1, $2, $3, $4, $5, $6, $7) returning *;`, data);
    return result;
  }

  async getAllItems(tableName) {
    const result = await pool.query(`SELECT * FROM ${tableName}`);
    return result;
  }

  async getBookingsByUser(userId, booking_id) {
    const result = await pool.query(`SELECT * FROM bookings WHERE user_id=${userId} AND booking_id=${booking_id}`);
    return result;
  }

  async getOnlyBookingsByUser(userId){
    const result = await pool.query(`SELECT * FROM bookings WHERE user_id=${userId}`);
    return result;
  }

  async deleteBooking(booking_id, userId){
    const result = await pool.query(`DELETE FROM bookings WHERE booking_id=${booking_id} AND user_id=${userId}`);
    return result;
  }

  async updateBookings(tripId, newData) {
    const result = await pool.query(`UPDATE trips SET available_seats='${newData}' WHERE trip_id=${tripId} returning *;`);
    return result;
  }

  async updateTrip(staTus, tripId) {
    const result = await pool.query(`UPDATE trips SET status='${staTus}' WHERE trip_id=${tripId}`);
    return result;
  }
}

export default Database;
