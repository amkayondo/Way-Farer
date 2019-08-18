import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';
import payLoad from './payload';

const newUser = new User();
const signIn = async (req, res) => {
  const userExists = await newUser.findUser(req.body.email);
  if (!userExists) {
    return resPonse.errorMessage(res, 400, 'incorrect email');
  }
  const payld = payLoad(
    userExists.user_id, userExists.isadmin, userExists.first_name,
    userExists.last_name, userExists.email,
  );
  if (!(userExists.password === req.body.password)) {
    return resPonse.errorMessage(res, 400, 'incorrect Password');
  }
  res.header('Authorization', createToken(payld));
  return (
    resPonse.successUser(res, 200, 'You have successfully Signned in', createToken(payld))
  );
};
module.exports = signIn;
