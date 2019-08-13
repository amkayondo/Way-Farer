import dotenv from 'dotenv';
import Pool from '../config/dbEnv';

dotenv.config();

class Database {
  async selectItemById(table, colom, id) {
    const result = await Pool.query(`SELECT * FROM ${table} WHERE ${colom}='${id}';`);
    return result;
  }

  async getTripBylicence(buslicensenumber, tripDate) {
    const result = await Pool.query(`SELECT * 
    FROM trips WHERE buslicensenumber='${buslicensenumber}' 
    AND tripdate='${tripDate}';`);
    return result;
  }

  async addNewUser(data) {
    const result = await Pool.query(`
      INSERT INTO users(firstname, lastname, 
      email, password, phone, address, isadmin)
      VALUES ($1, $2, $3, $4, $5, $6, $7);`, data);
    return result;
  }

  async addNewTrip(data) {
    const result = await Pool.query(`INSERT INTO trips(
        seatingcapacity, availableSeats, buslicensenumber,
        origin, destination, fare, tripdate, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`, data);
    return result;
  }

  async getAllItems(tableName) {
    const result = await Pool.query(`SELECT * FROM ${tableName}`);
    return result;
  }


  async updateTrip(staTus, tripId) {
    const result = await Pool.query(`UPDATE trips SET status='${staTus}' WHERE tripid=${tripId}`);
    return result;
  }
}

export default Database;
