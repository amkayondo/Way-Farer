import resPonse from '../helpers/responses/response';
import isAdminController from '../util/isAdmin';
// Check if User is an Admin
const isAdmin = (req, res, next) => {
  try {
    isAdminController(req, resPonse, res);
    next();
  // eslint-disable-next-line no-empty
  } catch (error) {}
  return true;
};

module.exports = isAdmin;
