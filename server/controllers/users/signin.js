import Joi from '@hapi/joi';
import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';
import signInSchema from '../../helpers/schema/sigin';
import payLoad from './payload';
import showData from '../../helpers/util/showData';

const newUser = User;
const signIn = (req, res) => {
  const schema = signInSchema(Joi);
  Joi.validate(req.body, schema, (error) => {
    if (error) { return resPonse.errorMessage(res, 400, (error.details[0].message)); }
    const userExists = newUser.findUser(req.body.email.trim());
    if (!userExists) { return resPonse.errorMessage(res, 400, 'Incorrect email'); }
    const payld = payLoad(
      userExists.id, userExists.firstName, userExists.lastName,
      userExists.email, userExists.password, userExists.isAdmin,
      userExists.isLoggedin,
    );
    const data = showData(payld);
    const token = createToken(payld);
    if (!(userExists.password === req.body.password.trim())) return resPonse.errorMessage(res, 400, 'Incorrect Password');
    res.header('Authorization', token);
    return (
      resPonse.successUser(res, 200, data, token)
    );
  });
};

module.exports = signIn;
