/* eslint-disable no-shadow */
import chai, { expect } from 'chai';
import { describe, it, before } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);
let bookingId;
let otherUserToken;

const user = {
  email: 'admin@app.com',
  password: 'admin123',
};

let userToken;
let tripId;
let bookingId2;
let bookingId3;
let otherUserToken2;
let tripIdT;

const tripData = {
  seating_capacity: '40',
  bus_license_number: 'UUBE345',
  origin: 'kampala',
  destination: 'kigali',
  trip_date: '23-12-2019',
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
before('NEW USER SIGN UP', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      first_name: 'kayondo',
      last_name: 'edward',
      email: 'amkayondoedtom@open.co',
      password: '38e3olsdjf',
      phone: '0781295406',
      address: 'kawempe',
    })
    .end((err, res) => {
      if (err) done(err);
      otherUserToken = res.body.data.token;
      done();
    });
});
before('NEW USER 2 SIGN UP', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      first_name: 'kayondo',
      last_name: 'edward',
      email: 'tomboya@open.co',
      password: '38e3olsdjf',
      phone: '0781295406',
      address: 'kawempe',
    })
    .end((err, res) => {
      if (err) done(err);
      otherUserToken2 = res.body.data.token;
      done();
    });
});

before('Admin should create new trip', (done) => {
  chai.request(app)
    .post('/api/v1/trips')
    .set('Authorization', userToken)
    .send({
      seating_capacity: '30',
      bus_license_number: 'UGX23',
      origin: 'kampala',
      destination: 'kigali',
      trip_date: '23-12-2019',
      fare: '30000',
    })
    .end((err, res) => {
      tripId = res.body.data.id;
      expect(res).to.have.status(201);
    });
  done();
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
      seating_capacity: '10',
      bus_license_number: 'UGX13',
      origin: 'kampala',
      destination: 'kigali',
      trip_date: '23-12-2019',
      fare: '30000',
    })
    .end((err, res) => {
      tripIdT = res.body.data.id;
      expect(res).to.have.status(201);
    });
  done();
});

before('should return no array of bookings if he has none', (done) => {
  chai.request(app)
    .get('/api/v1/bookings')
    .set('Authorization', otherUserToken)
    .end((err, res) => {
      expect(res).to.have.status(200);
    });
  done();
});

describe('BOOKINGS TESTS', () => {
  it('should return error if not found bookings', (done) => {
    chai.request(app)
      .get('/api/v1/bookings')
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
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
      .send({
        tripId: `${tripId}`,
        trip_date: '23-12-2019',
        numberOfSeats: '3',
      })
      .end((err, res) => {
        bookingId = res.body.data.bookingId;
        if (err) done(err);
        done();
      });
  });
  it('should post new bookings', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        tripId: `${tripId}`,
        trip_date: '23-12-2019',
        numberOfSeats: '3',
      })
      .end((err, res) => {
        bookingId2 = res.body.data.bookingId;
        if (err) done(err);
        done();
      });
  });
  it('should post new bookings', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', otherUserToken)
      .send({
        tripId: `${tripId}`,
        trip_date: '23-12-2019',
        numberOfSeats: '3',
      })
      .end((err, res) => {
        bookingId3 = res.body.data.bookingId;
        if (err) done(err);
        done();
      });
  });
  it('should return error if seats are more than', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        tripId: `${tripIdT}`,
        trip_date: '23-12-2019',
        numberOfSeats: '47',
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
        tripId: `${tripIdT}`,
        trip_date: '23-12-2019',
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
        tripId: `${tripIdT}`,
        trip_date: '23-12-2019',
        numberOfSeats: '10',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        if (err) done(err);
        done();
      });
  });
  it('should return error ifno seats available', (done) => {
    chai.request(app)
      .post('/api/v1/bookings')
      .set('Authorization', userToken)
      .send({
        tripId: `${tripIdT}`,
        trip_date: '23-12-2019',
        numberOfSeats: '50',
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
      .delete(`/api/v1/bookings/${bookingId2}`)
      .set('Authorization', otherUserToken2)
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
  it('should delete a booking if admin', (done) => {
    chai.request(app)
      .delete(`/api/v1/bookings/${bookingId3}`)
      .set('Authorization', userToken)
      .end((err, res) => {
        expect(res).to.have.status(200);
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
        bus_license_number: 'UAG34223',
        trip_date: '23-12-2019',
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
        bus_license_number: 'UAG34223',
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
        bus_license_number: 'UUBE345',
        trip_date: '13-12-2019',
        numberOfSeats: '3',
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        done();
      });
  });
});
