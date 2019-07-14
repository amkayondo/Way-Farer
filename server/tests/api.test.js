import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';
// import createToken from '../helpers/users/token';

const uuid = require('uuid');


chai.use(chaiHttp);
const newUser = {
  id: uuid.v4(),
  firstName: 'kayondo',
  lastName: 'edward',
  email: 'kayondo@open.co',
  password: '23456',
  admin: false,
};

// const newToken = createToken(newUser);

describe('API', () => {
  it('should return a string', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
    done();
  });
  it('should create an account', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
      });
    done();
  });
});
