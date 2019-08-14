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
    const payload = payLoad(
      newData.userid,
      newData.isadmin,
    );
    const token = createToken(payload);
    res.header('Authorization', token);
    await newUser.createNewUser(newData);
    resPonse.successUser(res, 201, 'Account successfully created', token);
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};

module.exports = signUp;
