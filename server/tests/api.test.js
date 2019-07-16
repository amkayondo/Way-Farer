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
  it('should return and error is user with the same email exists', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });
  it('should return an error when email not given', (done) => {
    const noEmail = {
      id: uuid.v4(),
      firstName: 'kayondo',
      lastName: 'edward',
      password: '23456',
      admin: false,
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(noEmail)
      .end((err, res) => {
        expect(res).to.have.status(400);
        // expect(res.body).to.have({
        //   status: 400,
        //   message: '"email" is required',
        // });
      });
    done();
  });
});
