import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';
import payLoad from './payload';

const newUser = new User();
const signUp = async (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const { phone, address, email, password } = req.body;
  const is_admin = false;
  const userExists = await newUser.findUser(req.body.email);
  if (userExists) { return resPonse.errorMessage(res, 400, 'user with the same email exists'); }
  const newUsr = await newUser.createNewUser({
    first_name, last_name, phone, address, email, password, is_admin,
  });
  const usrData = newUsr.rows[0];
  const payload = payLoad(
    usrData.user_id, usrData.isadmin, usrData.first_name, usrData.last_name, usrData.email,
  );
  res.header('Authorization', createToken(payload));
  resPonse.successUser(res, 201, 'account successfully created', createToken(payload));
};
module.exports = signUp;
