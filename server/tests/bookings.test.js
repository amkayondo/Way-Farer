import chai, { expect } from 'chai';
import { describe, it, before } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';
import {
  noEmail, newUserTwo, invalidPassword, invalidUser, siginUser, newUserOne, admin,
} from './mockingData/users';
import { tripDataForBooking } from './mockingData/trips';

chai.use(chaiHttp);

let adminToken;
let notAdminToken;
let tripId;
let bookingIdTwo;
let bookingId;

const runBookingTests = () => {
  before('Not admin to siginUp', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUserTwo)
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

  describe('BOOKINGS TESTS', () => {
    it('should create a trip', (done) => {
      chai.request(app)
        .post('/api/v1/trips')
        .set('Authorization', adminToken)
        .send(tripDataForBooking)
        .end((err, res) => {
          tripId = res.body.data.trip_id;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.deep.equal('Trip successfully created');
          done();
        });
    });
    it('get error not found when not bookings made yet by User', (done) => {
      chai.request(app)
        .get('/api/v1/bookings')
        .set('Authorization', notAdminToken)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.error).to.deep.equal('You have made no bookings yet');
        });
      done();
    });
    it('get error not found when not bookings made yet by Admin', (done) => {
      chai.request(app)
        .get('/api/v1/bookings')
        .set('Authorization', adminToken)
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body.error).to.deep.equal('No bookings made at the moment');
        });
      done();
    });

    it('should create a bookings', (done) => {
      chai.request(app)
        .post('/api/v1/bookings')
        .set('Authorization', adminToken)
        .send({
          trip_id: tripId,
          trip_date: '23-12-2019',
          number_of_seats: 25,
        })
        .end((err, res) => {
          bookingId = res.body.data.booking_id;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.deep.equal('New Booking successfully made');
          done();
        });
    });
    it('should return error if trip invalid', (done) => {
      chai.request(app)
        .post('/api/v1/bookings')
        .set('Authorization', adminToken)
        .send({
          trip_id: 346,
          trip_date: '23-12-2019',
          number_of_seats: 25,
        })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.deep.equal('Trip with ID 346 doesnt exist');
          done();
        });
    });
    it('should return error if trip date invalid', (done) => {
      chai.request(app)
        .post('/api/v1/bookings')
        .set('Authorization', adminToken)
        .send({
          trip_id: tripId,
          trip_date: '23-12-2014',
          number_of_seats: 25,
        })
        .end((err, res) => {
          expect(res).to.have.status(404);
          expect(res.body).to.be.an('object');
          expect(res.body.error).to.deep.equal('No trip is available on this date 23-12-2014');
          done();
        });
    });
    it('should create another bookings', (done) => {
      chai.request(app)
        .post('/api/v1/bookings')
        .set('Authorization', notAdminToken)
        .send({
          trip_id: tripId,
          trip_date: '23-12-2019',
          number_of_seats: 25,
        })
        .end((err, res) => {
          bookingIdTwo = res.body.data.booking_id;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.message).to.deep.equal('New Booking successfully made');
          done();
        });
    });
    it('should return all bookings by the user', (done) => {
      chai.request(app)
        .get('/api/v1/bookings')
        .set('Authorization', adminToken)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res).to.have.status(200);
        });
      done();
    });
    it('should return error when deleting a booking not for the same user', (done) => {
      chai.request(app)
        .delete(`/api/v1/bookings/${bookingId}`)
        .set('Authorization', notAdminToken)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res).to.have.status(400);
          expect(res.body.error).to.deep.equal(`Booking not found with id ${bookingId}`);
        });
      done();
    });
    it('should  deletea booking is for the user', (done) => {
      chai.request(app)
        .delete(`/api/v1/bookings/${bookingId}`)
        .set('Authorization', adminToken)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res).to.have.status(200);
          expect(res.body.message).to.deep.equal('Booking successfully deleted');
        });
      done();
    });
    it('should return all bookings', (done) => {
      chai.request(app)
        .get('/api/v1/bookings')
        .set('Authorization', adminToken)
        .end((err, res) => {
          expect(res.body).to.be.an('object');
          expect(res).to.have.status(200);
        });
      done();
    });
  });
};
module.exports = runBookingTests;
