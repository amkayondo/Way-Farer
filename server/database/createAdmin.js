import '@babel/plugin-transform-regenerator';
import '@babel/polyfill';
import dotenv from 'dotenv';
import Pool from '../config/dbEnv';
import Database from '../models/wayFareDb';

const db = new Database();


dotenv.config();

const createAdmin = async () => {
  const data = ['App', 'Admin', 'admin@app.com', 'admin123', '0781295406', 'kampala', true];
  const result = await Pool.query(`INSERT INTO users(
    firstname, lastname, email, password, phone, address, 
    isadmin)
    VALUES ($1, $2, $3, $4, $5, $6, $7);`, data);
  return result;
};

module.exports = createAdmin;
require('make-runnable');
