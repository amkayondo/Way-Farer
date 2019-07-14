import User from '../../models/users';
import createToken from '../../helpers/users/token';

const bcrypt = require('bcrypt');
const uuid = require('uuid');

const newUser = new User();

const newUserData = newUser.userdb;

const signUp = (req, res) => {
  bcrypt.hash(req.body.password, 10,
    (err, hash) => {
      if (err) {
        res.status(500).json(
          {
            error: err,
          },
        );
      } else {
        const data = {
          id: uuid.v4(),
          firstName: req.body.first_name,
          lastName: req.body.last_name,
          email: req.body.email,
          password: hash,
          admin: false,
        };

        const payload = {
          id: uuid.v4(),
          email: req.body.email,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          admin: false,
        };
        const token = createToken(payload);
        res.header('Authorization', token);
        newUser.createNewUser(data);
        res.status(200).json({
          status: 200,
          data: newUserData,
          token,
        });
      }

      // console.log(newUser.userdb);
    });
};

module.exports = signUp;
