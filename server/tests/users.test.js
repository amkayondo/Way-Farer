import { expect } from 'chai';
import { describe, it } from 'mocha';
import User from '../models/users';

const newUsr = new User();

describe('APP FUNCTIONALITY', () => {
  it('should create anew user and add to database', (done) => {
    newUsr.createNewUser({
      firstName: 'kayondo',
      lastName: 'edward',
      email: 'kayondo@open.co',
      password: '23456',
    });
    expect(newUsr.userdb).to.eql([{
      firstName: 'kayondo',
      lastName: 'edward',
      email: 'kayondo@open.co',
      password: '23456',
    }]);
    done();
  });
});
