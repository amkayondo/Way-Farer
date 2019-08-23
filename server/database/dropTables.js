import '@babel/plugin-transform-regenerator';
import '@babel/polyfill';
import dotenv from 'dotenv';
import Connection from '../config/dbEnv';

const pool = Connection.connectdb();


dotenv.config();

const dropTables = async () => {
  const result = await pool.query(`
  DROP TABLE users CASCADE;
  DROP TABLE trips CASCADE;
  DROP TABLE bookings CASCADE;
  `);
  return result;
};
module.exports = dropTables;
require('make-runnable');
