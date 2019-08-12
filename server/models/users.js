/* eslint-disable no-empty */
/* eslint-disable consistent-return */
/* eslint-disable space-before-blocks */
import Database from './wayFareDb';

const db = new Database();

const User = {
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
    // try {
    const user = await db.getUserByEmail(data_);
    console.log(user);
    const result = user.rows[0];
    return result;
    // } catch (err){}
  },

  // create new user
  async createNewUser(userInfo) {
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
    const cret = await db.addNewUser(userData);
    return cret;
  },
};

module.exports = User;
