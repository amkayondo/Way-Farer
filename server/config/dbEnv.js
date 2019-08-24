import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const Connection = {
  connectdb() {
    if (process.env.NODE_ENV === 'development') {
      return new Pool({
        connectionString: process.env.DEV_DATABASE,
      });
    }
    if (process.env.NODE_ENV === 'production') {
      return new Pool({
        connectionString: process.env.PRODUCTION_DATABASE,
      });
    }
    if (process.env.NODE_ENV === 'test') {
      return new Pool({
        connectionString: process.env.TEST_DATABASE,
      });
    }
  },
};
module.exports = Connection;
