import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import resPonse from '../helpers/responses/response';

dotenv.config();

const appAuth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    if (header === ''){ return resPonse.errorMessage(res, 401, 'access token cant be empty'); }
    return resPonse.errorMessage(res, 401, 'access token required');
  }
  const decoded = jwt.decode(header);
  if (decoded === null){
    return resPonse.errorMessage(res, 400, 'invalid access token');
  }
  jwt.verify(header, 'opensecrete', { expiresIn: '7d' });
  next();
};

module.exports = appAuth;
