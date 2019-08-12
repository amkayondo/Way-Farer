/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import dotenv from 'dotenv';
import Pool from '../config/dbEnv';


dotenv.config();

class Database {
  async queryDatabySelect(table, key, data) {
    const result = (`SELECT * FROM ${table} WHERE ${key}=${data};`);
    return result;
  }

  // Get Item By Id
  async selectItemById(table, id) {
    try {
      const result = await Pool.query(`SELECT * FROM ${table} WHERE id='${id}';`);
      return result;
    } catch (err) {}
  }

  // Get Item By Id
  async getTripBylicence(table, buslicensenumber) {
    try {
      const result = await Pool.query(this.queryDatabySelect(table, 'buslicensenumber', buslicensenumber));
      return result;
    } catch (err) {}
  }

  // Add new user
  async addNewUser(data) {
    try {
      const result = await Pool.query(`INSERT INTO users(
        firstname, lastname, email, password, phone, address, 
        isadmin)
        VALUES ($1, $2, $3, $4, $5, $6, $7);`, data);
      return result;
    } catch (err) {}
  }

  // Add new user
  async addNewTrip(data) {
    try {
      const result = await Pool.query(`INSERT INTO trips(
        seatingcapacity, availableSeats, buslicensenumber,
        origin, destination, fare, tripdate, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`, data);
      return result;
    } catch (err) {}
  }

  // get all items
  async getAllItems(tableName) {
    // try {
    const result = await Pool.query(`SELECT * FROM ${tableName}`);
    return result;
    // } catch (err) {
    //   return err;
    // }
  }

  // Login User
  async getUserByEmail(email) {
    try {
      const data = await Pool.query(`SELECT * FROM users WHERE email='${email}';`);
      return data;
    } catch (err) {
      return err;
    }
  }
}

export default Database;
