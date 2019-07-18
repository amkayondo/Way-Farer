import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';

const uuid = require('uuid');

chai.use(chaiHttp);

const newUser = {
  first_name: 'kayondo',
  last_name: 'edward',
  email: 'kayondo@open.co',
  password: 'vbcbcbcb',
};

const siginUser = {
  email: 'kayondo@open.co',
  password: 'vbcbcbcb',
};

const invalidUser = {
  email: 'tom@open.co',
  password: 'vbcbcbcb',
};

const invalidPassword = {
  email: 'kayondo@open.co',
  password: '23dsdd456',
};
// const newToken = createToken(newUser);

describe('USERS TESTS', () => {
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
      });
    done();
  });
  it('should return error if email exists on create an account', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });
  it('should login user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(siginUser)
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
    done();
  });
  it('should return error if user doesnt exist on login', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(invalidUser)
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });
  it('should return error if password is invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(invalidPassword)
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
      });
    done();
  });
  it('should return an error when fields not given', (done) => {
    const noEmail = {
      password: '23456',
      admin: false,
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(noEmail)
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });
});
