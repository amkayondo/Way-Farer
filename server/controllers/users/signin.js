import Joi from '@hapi/joi';
import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';

const newUser = User;

const signIn = (req, res) => {
  const { email, password } = req.body;
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });
  Joi.validate(req.body, schema, (error) => {
    if (error) {
      return resPonse.errorMessage(res, 400, (error.details[0].message));
    }
    const userExists = newUser.findUser(email.trim());

    //   console.log(email);
    //   console.log(User.userDataBase);

    if (!userExists) {
      return resPonse.errorMessage(res, 400, 'Incorrect email');
    }
    const isUser = userExists.password === password.trim();

    //   console.log(userExists.password);
    //   console.log(isUser);

    const payld = {
      id: userExists.id,
      firstName: userExists.firstName,
      lastName: userExists.lastName,
      email: userExists.email,
      isAdmin: userExists.isAdmin,
    };

    const data = {
      id: userExists.id,
      firstName: userExists.firstName,
      lastName: userExists.lastName,
      email: userExists.email,
      isAdmin: userExists.isAdmin,
    };
    const token = createToken(payld);
    if (!isUser) return resPonse.errorMessage(res, 400, 'Incorrect Password');
    res.header('Authorization', token);
    return resPonse.successUser(res, 200, data, token);
  });
};

module.exports = signIn;
