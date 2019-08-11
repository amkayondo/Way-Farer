import dotenv from 'dotenv';
import Pool from '../config/dbEnv';


dotenv.config();

const dropTables = () => {
  const result = Pool.query(`
    DROP TABLE IF EXISTS users; 
    DROP TABLE IF EXISTS trips;
    DROP TABLE IF EXISTS bookings;`);
  return result;
};
module.exports = dropTables;
require('make-runnable');
