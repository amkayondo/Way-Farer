const admin = {
  email: 'admin@app.com',
  password: 'admin123',
};

const userExists = {
  first_name: 'kayondo',
  last_name: 'edward',
  email: 'admin@app.com',
  password: 'skldfdskfnklsfnflsfdfdf',
  address: 'kampala',
  phone: '0781295406',
};

const newUserOne = {
  first_name: 'kayondo',
  last_name: 'edward',
  email: 'kayondo@open.co',
  password: 'kjhfsdfkjsfnkslfnkl',
  address: 'kampala',
  phone: '0781295406',
};
const notAdmin = {
  first_name: 'amnot',
  last_name: 'admin',
  email: 'amnotadmin@open.co',
  password: 'kjhfsdfkjsfnkslfnkl',
  address: 'kampala',
  phone: '0781295406',
};

const newUserTwo = {
  first_name: 'tom',
  last_name: 'boya',
  email: 'boyaboya@open.co',
  password: 'kjhfsdfkjsfnkslfnkl',
  address: 'kampala',
  phone: '0781295406',
};


const siginUser = {
  email: 'kayondo@open.co',
  password: 'kjhfsdfkjsfnkslfnkl',
};

const invalidUser = {
  email: 'tom@open.co',
  password: 'kjhfsdfkjsfnkslfnkl',
};

const invalidPassword = {
  email: 'kayondo@open.co',
  password: '23dsdd456',
};

const noEmail = {
  first_name: 'kayondo',
  last_name: 'edward',
  password: '23456',
  phone: '07812356',
  address: 'kampala',
};

module.exports = {
  noEmail,
  invalidPassword,
  userExists,
  invalidUser,
  siginUser,
  newUserOne,
  admin,
  notAdmin,
  newUserTwo,
};
