import Joi from '@hapi/joi';
import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';
import signInSchema from '../../helpers/schema/sigin';
import payLoad from './payload';

const newUser = User;


const signIn = async (req, res) => {
  const result = Joi.validate(req.body, signInSchema);
  if (result.error) {
    return resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
  }
  const userExists = await newUser.findUser(req.body.email);

  if (!userExists) { return resPonse.errorMessage(res, 400, 'Incorrect email'); }
  const payld = payLoad(
    userExists.id, userExists.isadmin,
  );
  const token = createToken(payld);
  if (!(userExists.password === req.body.password)) return resPonse.errorMessage(res, 400, 'Incorrect Password');
  res.header('Authorization', token);
  return (
    resPonse.successUser(res, 200, 'You have successfully Signned in', token)
  );
};

module.exports = signIn;
