import jwt from 'jsonwebtoken';

const createToken = payload => jwt.sign(payload, 'openseamanopensecretecrete', { expiresIn: '7d' });

export default createToken;
