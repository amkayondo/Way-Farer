import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';
import {
  noEmail, invalidPassword, invalidUser, siginUser, newUserOne, admin,
} from './mockingData/users';

chai.use(chaiHttp);

const runUserTests = () => {
  describe('USERS TESTS', () => {
    it('should return a string', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
        });
      done();
    });
    it('should login', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(admin)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
        });
      done();
    });
    it('should return error if email invalid', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(invalidUser)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.error).to.deep.equal('Incorrect email');
        });
      done();
    });
    it('should create user account', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(newUserOne)
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.deep.equal('Account successfully created');
        });
      done();
    });
    it('should return error if invalid creditionals are made on create user account', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send(noEmail)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.deep.equal('"Email is invalid" is required');
        });
      done();
    });
    it('should return error if user exists', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signup')
        .send({
          first_name: 'kayondo',
          last_name: 'edward',
          email: 'admin@app.com',
          password: 'skldfdskfnklsfnflsfdfdf',
          address: 'kampala',
          phone: '0781295406',
        })
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.deep.equal('User with the same email exists');
        });
      done();
    });
    it('should return error if password is invalid', (done) => {
      chai.request(app)
        .post('/api/v1/auth/signin')
        .send(invalidPassword)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body.error).to.deep.equal('Incorrect Password');
        });
      done();
    });
  });
};
module.exports = runUserTests;
