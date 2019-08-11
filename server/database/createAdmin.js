import dotenv from 'dotenv';
import Pool from '../config/dbEnv';

dotenv.config();

const createAdmin = () => Pool.query(`
INSERT INTO users(
    firstname, lastname, email, password, phone, address, 
    isadmin)
    VALUES ('App', 'Admin', 'admin@app.com', 'admin123', '0781295406', 'kampala', true);
`);

module.exports = createAdmin;
require('make-runnable');
