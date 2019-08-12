import '@babel/plugin-transform-regenerator';
import '@babel/polyfill';
import dotenv from 'dotenv';
import Pool from '../config/dbEnv';


dotenv.config();

const dropTables = async () => {
  const result = await Pool.query(`
  DROP TABLE users CASCADE;
  DROP TABLE trips CASCADE;
  DROP TABLE bookings CASCADE;
  `);
  return result;
};
module.exports = dropTables;
require('make-runnable');
