import jwt from 'jsonwebtoken';

const isAdminController = (req, resPonse, res) => {
  const header = req.headers.authorization;
  const x = jwt.decode(header, { complete: true });
  if (!x.payload.isAdmin === true) { return resPonse.errorMessage(res, 401, 'Unauthorized access'); }
};

module.exports = isAdminController;
