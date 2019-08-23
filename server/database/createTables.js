import '@babel/plugin-transform-regenerator';
import '@babel/polyfill';
import dotenv from 'dotenv';
import Connection from '../config/dbEnv';

const pool = Connection.connectdb();

dotenv.config();

const createTables = async () => {
  const result = await pool.query(`
CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL, first_name VARCHAR(24) NOT NULL, last_name VARCHAR(24) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(80) NOT NULL, phone VARCHAR(24),
    address VARCHAR(24) NOT NULL, isAdmin BOOLEAN NOT NULL DEFAULT false, PRIMARY KEY (user_id));
    
    CREATE TABLE IF NOT EXISTS trips (
    trip_id SERIAL, seating_capacity INTEGER,
    available_seats INTEGER,
    bus_license_number VARCHAR(30) NOT NULL,
    origin VARCHAR(30) NOT NULL,
    destination VARCHAR(30) NOT NULL,
    fare FLOAT NOT NULL, 
    trip_date VARCHAR(30) NOT NULL,
    status VARCHAR(30) NOT NULL,
    create_on TIMESTAMP DEFAULT NOW(), PRIMARY KEY (trip_id));
    
    CREATE TABLE IF NOT EXISTS bookings (
    booking_id SERIAL, user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE, 
    bus_license_number VARCHAR(30) NOT NULL, 
    trip_date VARCHAR(30) NOT NULL, number_of_Seats INTEGER NOT NULL,
    first_name VARCHAR(24) NOT NULL, last_name VARCHAR(24) NOT NULL, email VARCHAR(50) NOT NULL, 
    create_on TIMESTAMP DEFAULT NOW(), PRIMARY KEY (booking_id));
`);
  return result;
};

module.exports = createTables;
require('make-runnable');
