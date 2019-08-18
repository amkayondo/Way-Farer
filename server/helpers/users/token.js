import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createToken = payload => jwt.sign(payload,
  'opensecrete', { expiresIn: '7d' });

export default createToken;
