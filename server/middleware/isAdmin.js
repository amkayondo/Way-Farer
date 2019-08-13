import resPonse from '../helpers/responses/response';
import isAdminController from '../util/isAdmin';

const isAdmin = (req, res, next) => {
  try {
    isAdminController(req, resPonse, res);
    next();
  } catch (error) {}
  return true;
};

module.exports = isAdmin;
