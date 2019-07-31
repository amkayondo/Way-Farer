import jwt from 'jsonwebtoken';
import resPonse from '../helpers/responses/response';

const appAuth = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || header === '') { return resPonse.errorMessage(res, 401, 'Unauthorized access'); }
    jwt.verify(header, 'THIS IS MY SECRETE', { expiresIn: '7d' });
    next();
  } catch (error) {
    resPonse.errorMessage(res, 400, 'Invalid token');
  }
  return true;
};

module.exports = appAuth;
