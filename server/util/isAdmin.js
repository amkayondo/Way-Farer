import jwt from 'jsonwebtoken';

// eslint-disable-next-line consistent-return
const isAdminController = (req, resPonse, res) => {
  const header = req.headers.authorization;
  const x = jwt.decode(header, { complete: true });
  if (!x.payload.isadmin === true) {
    return resPonse.errorMessage(res, 401, 'Unauthorized access');
  }
};

module.exports = isAdminController;
