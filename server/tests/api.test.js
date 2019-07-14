import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

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
      .get('api/v1/auth/signup')
      .send({
        firstName: 'tom',
        lastName: 'timo',
        email: 'timo@gio.com',
        password: '12345',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
    done();
  });
});
