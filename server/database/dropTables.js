import dotenv from 'dotenv';
import Pool from '../config/dbEnv';


dotenv.config();

const dropTables = () => {
  const result = Pool.query(`
  DROP TABLE users CASCADE;
  DROP TABLE trips CASCADE;
  DROP TABLE bookings CASCADE;
  `);
  return result;
};
module.exports = dropTables;
require('make-runnable');
