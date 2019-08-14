import dotenv from 'dotenv';
import Pool from '../config/dbEnv';

dotenv.config();

class Database {
  async selectItemById(table, colom, id) {
    const result = await Pool.query(`SELECT * FROM ${table} WHERE ${colom}='${id}';`);
    return result;
  }

  async getTripBylicence(bus_license_number, tripDate) {
    const result = await Pool.query(`SELECT * 
    FROM trips WHERE bus_license_number='${bus_license_number}' 
    AND trip_date='${tripDate}';`);
    return result;
  }

  async addNewUser(data) {
    const result = await Pool.query(`
      INSERT INTO users(first_name, last_name, 
      email, password, phone, address, isadmin)
      VALUES ($1, $2, $3, $4, $5, $6, $7) returning *;`, data);
    return result;
  }

  async addNewTrip(data) {
    const result = await Pool.query(`INSERT INTO trips(
        seating_capacity, available_seats, bus_license_number,
        origin, destination, fare, trip_date, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) returning *;`, data);
    return result;
  }

  async getAllItems(tableName) {
    const result = await Pool.query(`SELECT * FROM ${tableName}`);
    return result;
  }


  async updateTrip(staTus, tripId) {
    const result = await Pool.query(`UPDATE trips SET status='${staTus}' WHERE trip_id=${tripId}`);
    return result;
  }
}

export default Database;
