import Database from '../database/wayFareDb';

const db = new Database();

export default class User {
  async findUser(data_) {
    const user = await db.selectItemById('users', 'email', data_);
    const result = user.rows[0];
    return result;
  }

  async createNewUser(userInfo) {
    const userData = [
      userInfo.first_name,
      userInfo.last_name,
      userInfo.email,
      userInfo.password,
      userInfo.phone,
      userInfo.address,
      false,
    ];
    const create = await db.addNewUser(userData);
    return create;
  }
}
