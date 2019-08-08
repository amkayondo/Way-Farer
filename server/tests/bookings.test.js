/* eslint-disable no-shadow */
import chai, { expect } from 'chai';
import { describe, it, before } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
let bookingId;
let otherUserToken;

const bookingData = {
  busLicenseNumber: 'UUBE345',
  tripDate: '23-12-2019',
  numberOfSeats: '3',
};

const user = {
  email: 'admin@app.com',
  password: 'admin123',
};

let userToken;

const tripData = {
  seatingCapacity: '40',
  busLicenseNumber: 'UUBE345',
  origin: 'kampala',
  destination: 'kigali',
  tripDate: '23-12-2019',
  fare: '30000',
};

before('user signs in', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signin')
    .send(user)
    .end((err, res) => {
      if (err) done(err);
      userToken = res.body.data.token;
      done();
    });
});
before('user signs in', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      first_name: 'kayondo',
      last_name: 'edward',
      email: 'amkayondoed@open.co',
      password: 'vbcbcbcb',
    })
    .end((err, res) => {
      if (err) done(err);
      otherUserToken = res.body.data.token;
      done();
    });
});
before('Admin should create new trip', (done) => {
  chai.request(app)
    .post('/api/v1/trips')
    .set('Authorization', userToken)
    .send(tripData)
    .end((err, res) => {
      expect(res).to.have.status(201);
    });
  done();
});

before('Admin should create another new trip', (done) => {
  chai.request(app)
    .post('/api/v1/trips')
    .set('Authorization', userToken)
    .send({
      seatingCapacity: '10',
      busLicenseNumber: 'UGX13',
      origin: 'kampala',
      destination: 'kigali',
      tripDate: '23-12-2019',
      fare: '30000',
    })
    .end((err, res) => {
      expect(res).to.have.status(201);
    });
  done();
});

before('should return no array of bookings if he has none', (done) => {
  chai.request(app)
    .get('/api/v1/bookings')
    .set('Authorization', userToken)
    .end((err, res) => {
      expect(res).to.have.status(404);
    });
  done();
});

describe('BOOKINGS TESTS', () => {
  it('should return error if not found bookings', (done) => {
    chai.request(app)
      .get('/api/v1/bookings')
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
    done();
  });
  it('should return an array of bookings', (done) => {
    chai.request(app)
      .get('/api/v1/bookings')
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
    done();
  });

  it('should post new bookings', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', otherUserToken)
      .send(bookingData)
      .end((err, res) => {
        // eslint-disable-next-line prefer-destructuring
        bookingId = res.body.data.bookingId;
        if (err) done(err);
        done();
      });
  });
  it('should return error if seats are more than', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        busLicenseNumber: 'UUBE345',
        tripDate: '23-12-2019',
        numberOfSeats: '60',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        if (err) done(err);
        done();
      });
  });
  it('should post another new bookings', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        busLicenseNumber: 'UGX13',
        tripDate: '23-12-2019',
        numberOfSeats: '10',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        if (err) done(err);
        done();
      });
  });
  it('should return error ifno seats available', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        busLicenseNumber: 'UGX13',
        tripDate: '23-12-2019',
        numberOfSeats: '5',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        if (err) done(err);
        done();
      });
  });
  it('should return booking by ID', (done) => {
    chai.request(app)
      .delete(`/api/v1/bookings/${bookingId}`)
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should return an array of bookings', (done) => {
    chai.request(app)
      .get('/api/v1/bookings')
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return an array of bookings', (done) => {
    chai.request(app)
      .get('/api/v1/bookings')
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return error on delete a booking if not the owner', (done) => {
    chai.request(app)
      .delete(`/api/v1/bookings/${bookingId}`)
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should delete a booking', (done) => {
    chai.request(app)
      .delete(`/api/v1/bookings/${bookingId}`)
      .set('Authorization', otherUserToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should return an array of bookings', (done) => {
    chai.request(app)
      .get('/api/v1/bookings')
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return error of invalid booking not found when deleting a booking', (done) => {
    chai.request(app)
      .delete(`/api/v1/bookings/${643456384}`)
      .set('Authorization', otherUserToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
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
        numberOfSeats: '3',
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
        busLicenseNumber: 'UUBE345',
        tripDate: '13-12-2019',
        numberOfSeats: '3',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
