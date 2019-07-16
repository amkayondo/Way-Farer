// User Model
export default class User {
  constructor() {
    this.userdb = [];
    this.userData = (
      id,
      firstName,
      lastName,
      email,
      password,
    ) => ({
      id,
      firstName,
      lastName,
      email,
      password,
    });
  }

  findUser(data_) {
    const userExists = this.userdb.find(x => x.email === data_.email);
    return userExists;
  }

  createNewUser(userInfo) {
    const data = this.userData(
      userInfo.id,
      userInfo.firstName,
      userInfo.lastName,
      userInfo.email,
      userInfo.password,
    );
    this.userdb.push(data);
  }
}
