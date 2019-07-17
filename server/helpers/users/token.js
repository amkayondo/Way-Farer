const jwt = require('jsonwebtoken');

const createToken = payload => jwt.sign(payload,
  'THIS IS MY SECRETE', { expiresIn: '7d' });

export default createToken;
