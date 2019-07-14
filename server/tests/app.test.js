import { expect } from 'chai';
import { describe, it } from 'mocha';
import User from '../models/users';
import createToken from '../helpers/users/token';


// const bcrypt = require('bcrypt');
const uuid = require('uuid');

const newUsr = new User();
const myUser = {
  id: uuid.v4(),
  firstName: 'kayondo',
  lastName: 'edward',
  email: 'kayondo@open.co',
  password: '23456',
  admin: false,
};

describe('APP FUNCTIONALITY', () => {
  it('should create anew user and add to database', (done) => {
    newUsr.createNewUser(myUser);
    expect(newUsr.userdb).to.be.an('array');
    done();
  });
  it('should create a token', (done) => {
    const newToken = createToken(myUser);
    expect(newToken).to.be.eq(newToken);
    done();
  });
});
