import Database from '../database/wayFareDb';

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

  async findUser(data_) {
    try {
      const user = await db.selectItemById('users', 'email', data_);
      const result = user.rows[0];
      return result;
    } catch (err){}
  },

  async createNewUser(userInfo) {
    try {
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
        data.phone,
        data.address,
        false,
      ];
      const cret = await db.addNewUser(userData);
      return cret;
    } catch (err){}
  },
};

module.exports = User;
