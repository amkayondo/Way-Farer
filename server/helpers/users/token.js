const jwt = require('jsonwebtoken');

const createToken = (payload) => {
  return jwt.sign(payload,
    'THIS IS MY SECRETE', { expiresIn: '7d' });
};

export default createToken;
