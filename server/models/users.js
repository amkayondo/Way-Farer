import uuid from 'uuid';

// User Database
const userDataBase = [
  {
    id: uuid.v4(),
    firstName: 'I am',
    lastName: 'admin',
    email: 'admin@app.com',
    password: 'admin123',
    isAdmin: true,
  },
];
// let firstName;
// let lastName;
// let email;
// let password;
// let isAdmin;
// User Model
const User = {
  userDataBase,
  // userMeta() {
  //   return {
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //     isAdmin,
  //   };
  // },
  // User data structure
  userData(id, firstName,
    lastName,
    email,
    password) {
    return {
      id,
      firstName,
      lastName,
      email,
      password,
    };
  },

  // FInd User
  findUser(data_) {
    return userDataBase.find(x => x.email === data_);
  },

  // create new user
  createNewUser(userInfo) {
    const data = this.userData(
      userInfo.id,
      userInfo.firstName,
      userInfo.lastName,
      userInfo.email,
      userInfo.password,
      userInfo.isAdmin,
    );
    userDataBase.push(data);
  },
};

module.exports = User;
