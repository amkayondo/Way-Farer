import User from '../../models/users';

const newUser = new User();

const dtay = newUser.userdb;

const signUp = (req, res) => {
  const data = {
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  };
  newUser.createNewUser(data);
  return res.status(200).json({
    status: 200,
    dtay,
  });
  // console.log(newUser.userdb);
};

module.exports = signUp;
