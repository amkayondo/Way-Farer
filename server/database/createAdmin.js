import '@babel/plugin-transform-regenerator';
import '@babel/polyfill';
import Connection from '../config/dbEnv';

const pool = Connection.connectdb();

const createAdmin = async () => {
  const data = ['App', 'Admin', 'admin@app.com', 'admin123', '0781295406', 'kampala', true];
  const result = await pool.query(`INSERT INTO users(
    first_name, last_name, email, password, phone, address, 
    isadmin)
    VALUES ($1, $2, $3, $4, $5, $6, $7);`, data);
  return result;
};
module.exports = createAdmin;
require('make-runnable');
