import Joi from '@hapi/joi';
import User from '../../models/users';
import createToken from '../../helpers/users/token';
import resPonse from '../../helpers/responses/response';

const bcrypt = require('bcrypt');
const uuid = require('uuid');

const newUser = new User();


// const userdB = newUser.userdb;

const signUp = (req, res) => {
  bcrypt.hash(req.body.password, 10,
    // eslint-disable-next-line consistent-return
    (err, hash) => {
      if (err) {
        res.status(400).json(
          {
            error: 'A field is missing!',
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
          firstName: req.body.first_name,
          lastName: req.body.last_name,
          email: req.body.email,
          admin: false,
        };
        const inputData = req.body;
        const schema = Joi.object().keys({
          first_name: Joi.string().min(3).alphanum().required(),
          last_name: Joi.string().min(3).alphanum().required(),
          email: Joi.string().email().required(),
          // fix this
          password: Joi.string().required(),
        });
        // Validate
        Joi.validate(inputData, schema, (error) => {
          if (error) {
            return resPonse.errorMessage(res, 400, (error.details[0].message));
          } const token = createToken(payload);
          res.header('Authorization', token);
          // res.set('Content-Type', 'text/plain');
          const userExists = newUser.findUser(data);
          if (userExists) {
            return resPonse.errorMessage(res, 400, 'User with the same email exists');
          }
          newUser.createNewUser(data);
          resPonse.successUser(res, 200, payload, token);
        });
      }

      // console.log(newUserData);
    });
};

module.exports = signUp;
