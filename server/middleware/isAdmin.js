import jwt from 'jsonwebtoken';
import resPonse from '../helpers/responses/response';
// Check if User is an Admin
const isAdmin = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    const x = jwt.decode(header, { complete: true });
    if (!x.payload.isAdmin === true) { return resPonse.errorMessage(res, 401, 'Unauthorized access'); }
    next();
  } catch (error) {
    resPonse.errorMessage(res, 400, 'You not an admin');
  }
  return true;
};

module.exports = isAdmin;
