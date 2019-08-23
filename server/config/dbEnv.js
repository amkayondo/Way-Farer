import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const appEnv = (evN, db) => {
  if (process.env.NODE_ENV === evN) {
    module.exports = new Pool({
      connectionString: db,
    });
  }
};

appEnv('development', process.env.DEV_DATABASE);
appEnv('production', process.env.PRODUCTION_DATABASE);
appEnv('test', process.env.TEST_DATABASE);
