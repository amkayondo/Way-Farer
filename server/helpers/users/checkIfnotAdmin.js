const checkIfNotAdmin = (req, notadmin) => (!req.headers.authorization || req.headers.authorization === ''
  || notadmin.isadmin === false || notadmin === null);
module.exports = checkIfNotAdmin;
