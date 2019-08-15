import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';
import payLoad from './payload';

const newUser = new User();
const signUp = async (req, res) => {
  try {
    const {
      first_name, last_name, phone, address, email, password,
    } = req.body;

    const is_admin = false;
    const newData = {
      first_name,
      last_name,
      phone,
      address,
      email,
      password,
      is_admin,
    };

    const userExists = await newUser.findUser(req.body.email);
    if (userExists) {
      return resPonse.errorMessage(res, 400, 'User with the same email exists');
    }

    const newUsr = await newUser.createNewUser(newData);
    const usrData = newUsr.rows[0];
    const payload = payLoad(
      usrData.user_id,
      usrData.isadmin,
      usrData.first_name,
      usrData.last_name,
      usrData.email,
    );
    const token = createToken(payload);
    res.header('Authorization', token);

    resPonse.successUser(res, 201, 'Account successfully created', token);
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};

module.exports = signUp;
