import jwt from 'jsonwebtoken';
import resPonse from '../helpers/responses/response';

const appAuth = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if(!header || header === "") { return resPonse.errorMessage(res, 401, "Unauthorized access"); }
        const token = jwt.verify(header, 'process.env.SECRETE_KEY');
        req.user = token;
        next();    
    } catch {
        resPonse.errorMessage(res, 400, 'Invalid token');
    }
};

module.exports = appAuth;
