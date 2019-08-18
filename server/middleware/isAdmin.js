import jwt from 'jsonwebtoken';
import resPonse from '../helpers/responses/response';

const isAdmin = (req, res, next) => {
  const header = req.headers.authorization;
  const token = jwt.decode(header);
  if (token.isadmin === false) {
    return resPonse.errorMessage(res, 401, 'unauthorized access');
  }
  next();
};

module.exports = isAdmin;
