import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';
import payLoad from './payload';

const newUser = new User();


const signIn = async (req, res) => {
  try {
    const userExists = await newUser.findUser(req.body.email);
    if (!userExists) {
      return resPonse.errorMessage(res, 400, 'Incorrect email');
    }
    const payld = payLoad(
      userExists.id, userExists.isadmin,
    );
    const token = createToken(payld);
    if (!(userExists.password === req.body.password)) {
      return resPonse.errorMessage(res, 400, 'Incorrect Password');
    }
    res.header('Authorization', token);
    return (
      resPonse.successUser(res, 200, 'You have successfully Signned in', token)
    );
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};

module.exports = signIn;
