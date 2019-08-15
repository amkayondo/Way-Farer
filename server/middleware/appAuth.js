import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import resPonse from '../helpers/responses/response';

dotenv.config();

const appAuth = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      if (header === ''){ return resPonse.errorMessage(res, 401, 'Access token cant be empty'); }
      return resPonse.errorMessage(res, 401, 'Access token required');
    }
    jwt.verify(header, 'knffslfnksldfkslfbafsjf', { expiresIn: '7d' });
    next();
  } catch (error) {
    resPonse.errorMessage(res, 400, 'Invalid Access token');
  }
  return true;
};

module.exports = appAuth;
