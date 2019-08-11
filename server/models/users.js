import Database from './wayFareDb';

const db = new Database();
const userDataBase = [
  {
    firstname: 'I am',
    lastname: 'admin',
    email: 'admin@app.com',
    phone: '0781295406',
    address: 'kampala',
    password: 'admin123',
    isAdmin: true,
  },
];
const User = {
  userDataBase,
  userData(firstname,
    lastname,
    email,
    password,
    address,
    phone) {
    return {
      firstname,
      lastname,
      email,
      password,
      address,
      phone,
    };
  },

  // FInd User
  async findUser(data_) {
    const user = await db.getUserByEmail(data_);
    const result = user.rows[0];
    return result;
  },

  // create new user
  createNewUser(userInfo) {
    const data = this.userData(
      userInfo.firstname,
      userInfo.lastname,
      userInfo.email,
      userInfo.password,
      userInfo.address,
      userInfo.phone,
      userInfo.isAdmin,
    );
    const userData = [
      data.firstname,
      data.lastname,
      data.email,
      data.password,
      data.address,
      data.phone,
      false,
    ];
    db.addNewUser(userData);
  },
};

module.exports = User;
