import chai, { expect } from 'chai';
import { describe, it, before } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

const bookingData = {
  busLicenseNumber: 'UAG34',
  tripDate: '23-12-2019',
  numberOfSeats: 3,
};

const user = {
  email: 'admin@app.com',
  password: 'admin123',
};

let userToken;

const tripData = {
  seatingCapacity: 50,
  busLicenseNumber: 'UAG34',
  origin: 'kampala',
  destination: 'kigali',
  tripDate: '23-12-2019',
  fare: 20000,
};

before((done) => {
  chai.request(app)
    .get('/api/v1/trips')
    .end((err, res) => {
      expect(res).to.have.status(200);
    });
  done();
});
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
    .post('/api/v1/trips')
    .send(tripData)
    .set('Authorization', userToken)
    .end((err) => {
      if (err) done(err);
      done();
    });
});

describe('BOOKINGS TESTS', () => {
  it('should create a booking', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send(bookingData)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('should return error if bus licence is not found', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        busLicenseNumber: 'UAG34223',
        tripDate: '23-12-2019',
        numberOfSeats: 3,
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should return error if a field is missing', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        busLicenseNumber: 'UAG34223',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should return error if trip date is not found', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        busLicenseNumber: 'UAG34',
        tripDate: '13-12-2019',
        numberOfSeats: 3,
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
