import chai, { expect } from 'chai';
import { describe, it, before } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';

const user = {
  email: 'admin@app.com',
  password: 'admin123',
};

let userToken;
let notAdminToken;
let tripId;

const tripData = {
  seatingCapacity: 50,
  busLicenseNumber: 'UGXHD',
  origin: 'Kampala',
  destination: 'kigali',
  tripDate: '2019-12-23',
  fare: 20000,
};
chai.use(chaiHttp);
before((done) => {
  chai.request(app)
    .post('/api/v1/auth/signin')
    .send(user)
    .end((err, res) => {
      if (err) done(err);
      userToken = res.body.token;
      done();
    });
});
before((done) => {
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      first_name: 'kayondo',
      last_name: 'edward',
      email: 'kayondo@amkayondo.co',
      password: 'vbcbcbcb',
    })
    .end((err, res) => {
      if (err) done(err);
      notAdminToken = res.body.token;
      done();
    });
});
before((done) => {
  chai.request(app)
    .get('/api/v1/trips')
    .end((err, res) => {
      expect(res).to.have.status(200);
    });
  done();
});
describe('TRIPS TESTS', () => {
  it('should create a trip', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('Authorization', userToken)
      .send(tripData)
      .end((err, res) => {
        tripId = res.body.data.id;
        expect(res).to.have.status(201);
        done();
      });
  });
  it('should return error if token is Invalid', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('Authorization', 'kdfhdsfhdsfhdhfkfhdf')
      .send(tripData)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should return error if token is unathorized', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('Authorization', notAdminToken)
      .send(tripData)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.error).to.deep.equal('Unauthorized access');
        done();
      });
  });
  it('should return error if token is unathorized', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('Authorization', '')
      .send(tripData)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.error).to.deep.equal('Unauthorized access');
        done();
      });
  });
  it('should return error if a field is missing', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('Authorization', userToken)
      .send({
        seatingCapacity: 50,
        busLicenseNumber: 'UGX HD',
        fare: 20000,
        status: 'active',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should return all trips', (done) => {
    chai.request(app)
      .get('/api/v1/trips')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return trips by destination', (done) => {
    chai.request(app)
      .get('/api/v1/trips')
      .query({ destination: 'kigali' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return error if trip not found', (done) => {
    chai.request(app)
      .get(`/api/v1/trips/${2323232}`)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should return trip if found', (done) => {
    chai.request(app)
      .get(`/api/v1/trips/${tripId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return all trips', (done) => {
    chai.request(app)
      .get('/api/v1/trips')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});