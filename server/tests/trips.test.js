import chai, { expect } from 'chai';
import { describe, it, before } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

let userToken;
let notAdminToken;


before('signup non admin', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send({
      first_name: 'kayondo',
      last_name: 'edward',
      email: 'qwjnkdnkdf@amtomd.co',
      password: 'kjhfsdfkjsfnkslfnkl',
      phone: '0781295406',
      address: 'kawempe',
    })
    .end((err, res) => {
      if (err) done(err);
      notAdminToken = res.body.data.token;
      done();
    });
});

before('signup admin', (done) => {
  chai.request(app)
    .post('/api/v1/auth/signin')
    .send({
      email: 'admin@app.com',
      password: 'admin123',
    })
    .end((err, res) => {
      if (err) done(err);
      userToken = res.body.data.token;
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
const tripData = {
  seating_capacity: '50',
  bus_license_number: 'UGXHD',
  origin: 'kampala',
  destination: 'kigali',
  trip_date: '23-12-2019',
  fare: '30000',
};

before((done) => {
  chai.request(app)
    .get('/api/v1/trips')
    .end((err, res) => {
      expect(res).to.have.status(200);
    });
  done();
});
describe('TRIPS TESTS', () => {
  it('should retun 404 if route not found', (done) => {
    chai.request(app)
      .post('/amInvalid')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
  it('should create a trip', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('Authorization', userToken)
      .send(tripData)
      .end((err, res) => {
        expect(res).to.have.status(201);
        done();
      });
  });
  it('should return all trips created ', (done) => {
    chai.request(app)
      .get('/api/v1/trips')
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
    done();
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
        done();
      });
  });
  it('should return error if a field is missing', (done) => {
    chai.request(app)
      .post('/api/v1/trips')
      .set('Authorization', userToken)
      .send({
        seating_capacity: 50,
        fare: 20000,
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
  it('should return trips by origin', (done) => {
    chai.request(app)
      .get('/api/v1/trips')
      .query({ origin: 'kampala' })
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
