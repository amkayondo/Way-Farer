// User Database
const userDataBase = [];

// User Model
const User = {
  userDataBase,
  // User data structure
  userData(id,
    firstName,
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
    );
    userDataBase.push(data);
  },

  // Find user by Id
  // findUserById()
};

module.exports = User;
