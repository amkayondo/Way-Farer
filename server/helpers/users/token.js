const jwt = require('jsonwebtoken');

const createToken = (payload) => {
  return jwt.sign(payload,
    'THIS IS MY SECRETE', { expiresIn: '24h' });
};

export default createToken;
