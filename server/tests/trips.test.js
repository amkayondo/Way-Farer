import chai, { expect } from 'chai';
import { describe, it, before } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';
import {
  noEmail, notAdmin, invalidPassword, invalidUser, siginUser, newUserOne, admin,
} from './mockingData/users';
import { tripData, tripDataX } from './mockingData/trips';

chai.use(chaiHttp);

let adminToken;
let notAdminToken;
let tripId;
let tripIdX;

const runTripTests = () => {
  before('Not admin to siginUp', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(notAdmin)
      .end((err, res) => {
        notAdminToken = res.body.data.token;
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
      });
    done();
  });

  before('Admin should siginin', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(admin)
      .end((err, res) => {
        adminToken = res.body.data.token;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
      });
    done();
  });

  describe('TESTING TRIPS', () => {
    it('should return resource not found', (done) => {
      chai.request(app)
        .get('/hahahaha')
        .set('Authorization', adminToken)
        .end((err, res) => {
          expect(res).to.have.status(404);
        });
      done();
    });

    it('get error not found when not trips', (done) => {
      chai.request(app)
        .get('/api/v1/trips')
        .set('Authorization', adminToken)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.error).to.deep.equal('no trips available at the moment');
        });
      done();
    });

    it('should create a trip', (done) => {
      chai.request(app)
        .post('/api/v1/trips')
        .set('Authorization', adminToken)
        .send(tripData)
        .end((err, res) => {
          tripId = res.body.data.trip_id;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.deep.equal('trip successfully created');
          done();
        });
    });
    it('should create a trip', (done) => {
      chai.request(app)
        .post('/api/v1/trips')
        .set('Authorization', adminToken)
        .send(tripDataX)
        .end((err, res) => {
          tripIdX = res.body.data.trip_id;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.deep.equal('trip successfully created');
          done();
        });
    });
    it('should return error if trip already exists', (done) => {
      chai.request(app)
        .post('/api/v1/trips')
        .set('Authorization', adminToken)
        .send(tripData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          done();
        });
    });
    it('should cancel trip by admin', (done) => {
      chai.request(app)
        .patch(`/api/v1/trips/${tripIdX}`)
        .set('Authorization', adminToken)
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.deep.equal('trip cancelled successfully');
          done();
        });
    });
    it('should throw error if user is unauthorized create a trip', (done) => {
      chai.request(app)
        .post('/api/v1/trips')
        .set('Authorization', notAdminToken)
        .send(tripData)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.deep.equal('unauthorized access');
          done();
        });
    });
    it('should return all trip by ID ', (done) => {
      chai.request(app)
        .get(`/api/v1/trips/${tripId}`)
        .set('Authorization', adminToken)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res).to.have.status(200);
        });
      done();
    });
    it('should return trips by query ', (done) => {
      chai.request(app)
        .get('/api/v1/trips')
        .set('Authorization', adminToken)
        .query({ destination: 'kigali' })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res).to.have.status(200);
        });
      done();
    });
    it('should return trips by query ', (done) => {
      chai.request(app)
        .get('/api/v1/trips')
        .set('Authorization', adminToken)
        .query({ origin: 'kampala' })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res).to.have.status(200);
        });
      done();
    });
    it('should validate query ', (done) => {
      chai.request(app)
        .get('/api/v1/trips')
        .set('Authorization', adminToken)
        .query({ jdjb: 'kampala' })
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res).to.have.status(400);
          expect(res.body.error).to.deep.equal('"jdjb" is not allowed');
        });
      done();
    });
    it('should throw error if no token added create a trip', (done) => {
      chai.request(app)
        .post('/api/v1/trips')
        .send(tripData)
        .end((err, res) => {
          expect(res).to.have.status(401);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.deep.equal('access token required');
          done();
        });
    });

    it('should throw error if token is invalid', (done) => {
      chai.request(app)
        .post('/api/v1/trips')
        .set('Authorization', 'ncbvncvbklcvbnclvb')
        .send(tripData)
        .end((err, res) => {
          expect(res).to.have.status(400);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.deep.equal('invalid access token');
          done();
        });
    });
  });
};
module.exports = runTripTests;
