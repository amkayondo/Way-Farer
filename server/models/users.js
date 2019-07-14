// User Model
export default class User {
  constructor() {
    this.userdb = [];
    this.userData = (
      firstName,
      lastName,
      email,
      password,
    ) => ({
      firstName,
      lastName,
      email,
      password,
    });
  }

  createNewUser(userInfo) {
    const data = this.userData(
      userInfo.firstName,
      userInfo.lastName,
      userInfo.email,
      userInfo.password,
    );
    this.userdb.push(data);
  }
}
