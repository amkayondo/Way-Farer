import Joi from '@hapi/joi';
import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';
import signUpSchema from '../../helpers/schema/signup';
import payLoad from './payload';

const newUser = User;
const signUp = async (req, res) => {
  try {
    const {
      firstname, lastname, phone, address, email, password,
    } = req.body;

    const xc = false;
    const newData = {
      firstname,
      lastname,
      phone,
      address,
      email,
      password,
      xc,
    };

    const result = Joi.validate(req.body, signUpSchema);
    if (result.error) {
      return resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
    }
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
  } catch (err){}
};

module.exports = signUp;
