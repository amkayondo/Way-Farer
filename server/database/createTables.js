import dotenv from 'dotenv';
import Pool from '../config/dbEnv';

dotenv.config();

const createTables = () => Pool.query(`
CREATE TABLE IF NOT EXISTS users (
    userId SERIAL, firstName VARCHAR(24) NOT NULL, lastName VARCHAR(24) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL, password VARCHAR(80) NOT NULL, phone VARCHAR(24),
    address VARCHAR(24) NOT NULL, isAdmin BOOLEAN NOT NULL DEFAULT false, PRIMARY KEY (userId));
    
    CREATE TABLE IF NOT EXISTS trips (
    tripId SERIAL, seatingCapacity INTEGER,
    create_on TIMESTAMP DEFAULT NOW(),
    busLicenseNumber VARCHAR(30) NOT NULL,
    origin VARCHAR(30) NOT NULL,
    fare FLOAT NOT NULL, 
    destination VARCHAR(30) NOT NULL,
    tripDate VARCHAR(30) NOT NULL,
    status VARCHAR(30) NOT NULL, PRIMARY KEY (tripId));
    
    CREATE TABLE IF NOT EXISTS bookings (
    bookingId SERIAL, userId INTEGER REFERENCES users(userId) ON DELETE CASCADE, amount INTEGER NOT NULL,
    status VARCHAR(30) NOT NULL, PRIMARY KEY (bookingId));
`);

module.exports = createTables;
require('make-runnable');
