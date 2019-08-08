import Joi from '@hapi/joi';
import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';
import signUpSchema from '../../helpers/schema/signup';
import payLoad from './payload';
import showData from '../../helpers/util/showData';

const uuid = require('uuid');

const newUser = User;
const signUp = (req, res) => {
  const data = payLoad(
    uuid.v4(),
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.password,
    false,
  );
  const payload = data;
  const inputData = req.body;
  const schema = signUpSchema(Joi);
  Joi.validate(inputData, schema, (error) => {
    if (error) {
      return resPonse.errorMessage(res, 400, (error.details[0].message));
    } const token = createToken(payload);
    res.header('Authorization', token);
    const userExists = newUser.findUser(data.email);
    if (userExists) {
      return resPonse.errorMessage(res, 400, 'User with the same email exists');
    }
    newUser.createNewUser(data);
    const userAcct = showData(data);
    resPonse.successUser(res, 201, userAcct, token);
    return true;
  });
};

module.exports = signUp;
