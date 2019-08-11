/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
import dotenv from 'dotenv';
import pool from '../config/dbEnv';


dotenv.config();

class Database {
  // Get Item By Id
  async selectItemById(table, id) {
    try {
      const result = await pool.query(`SELECT * FROM ${table} WHERE id=${id};`);
      return result;
    } catch (err) {}
  }

  // Get Item By Id
  async getTripBylicence(table, buslicensenumber) {
    try {
      const result = await pool.query(`SELECT * FROM ${table} WHERE buslicensenumber=${buslicensenumber};`);
      return result;
    } catch (err) {}
  }

  // Add new user
  async addNewUser(data) {
    try {
      const result = await pool.query(`INSERT INTO users(
        firstname, lastname, email, password, phone, address, 
        isadmin)
        VALUES ($1, $2, $3, $4, $5, $6, $7);`, data);
      return result;
    } catch (err) {}
  }

  // Add new user
  async addNewTrip(data) {
    try {
      const result = await pool.query(`INSERT INTO trips(
        seatingcapacity, buslicensenumber, origin,
        fare, destination, tripdate, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7);`, data);
      return result;
    } catch (err) {}
  }

  // get all trips
  async getAllItems(tableName) {
    try {
      const result = await pool.query(`SELECT * FROM ${tableName}`);
      return result;
    } catch (err) {}
  }

  // Login User
  async getUserByEmail(email) {
    try {
      const data = await pool.query(`SELECT * FROM users WHERE email='${email}'`);
      return data;
    } catch (err) {}
  }
}

export default Database;
