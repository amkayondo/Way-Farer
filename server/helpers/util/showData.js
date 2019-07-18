const showData = val => ({
  id: `${val.id}`,
  firstName: `${val.firstName}`,
  lastName: `${val.lastName}`,
  email: `${val.email}`,
  isAdmin: `${val.isAdmin}`,
});
module.exports = showData;
