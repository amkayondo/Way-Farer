// import chai, { expect } from 'chai';
// import { describe, it, before } from 'mocha';
// import chaiHttp from 'chai-http';
// import app from '../index';

// chai.use(chaiHttp);

// let userToken;
// let notAdminToken;
// let tripId;

// // signUp Non Admin
// before('signup non admin', (done) => {
//   chai.request(app)
//     .post('/api/v1/auth/signup')
//     .send({
//       first_name: 'kayondo',
//       last_name: 'edward',
//       email: 'kayondo@amtomd.co',
//       password: '38e3olsdjf',
//     })
//     .end((err, res) => {
//       if (err) done(err);
//       notAdminToken = res.body.data.token;
//       done();
//     });
// });

// // Signin Admin
// before('signup admin', (done) => {
//   chai.request(app)
//     .post('/api/v1/auth/signin')
//     .send({
//       email: 'admin@app.com',
//       password: 'admin123',
//     })
//     .end((err, res) => {
//       if (err) done(err);
//       userToken = res.body.data.token;
//       done();
//     });
// });
// before((done) => {
//   chai.request(app)
//     .get('/api/v1/trips')
//     .end((err, res) => {
//       expect(res).to.have.status(200);
//     });
//   done();
// });
// const tripData = {
//   seatingCapacity: '50',
//   busLicenseNumber: 'UGXHD',
//   origin: 'kampala',
//   destination: 'kigali',
//   tripDate: '23-12-2019',
//   fare: '30000',
// };

// before((done) => {
//   chai.request(app)
//     .get('/api/v1/trips')
//     .end((err, res) => {
//       expect(res).to.have.status(200);
//     });
//   done();
// });
// describe('TRIPS TESTS', () => {
//   it('should retun 404 if route not found', (done) => {
//     chai.request(app)
//       .post('/amInvalid')
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         done();
//       });
//   });
//   it('should create a trip', (done) => {
//     chai.request(app)
//       .post('/api/v1/trips')
//       .set('Authorization', userToken)
//       .send(tripData)
//       .end((err, res) => {
//         tripId = res.body.data.id;
//         expect(res).to.have.status(201);
//         done();
//       });
//   });
//   it('should return all trips created ', (done) => {
//     chai.request(app)
//       .get('/api/v1/trips')
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//       });
//     done();
//   });
//   it('should return error if token is Invalid', (done) => {
//     chai.request(app)
//       .post('/api/v1/trips')
//       .set('Authorization', 'kdfhdsfhdsfhdhfkfhdf')
//       .send(tripData)
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         done();
//       });
//   });
//   it('should return error if token is unathorized', (done) => {
//     chai.request(app)
//       .post('/api/v1/trips')
//       .set('Authorization', notAdminToken)
//       .send(tripData)
//       .end((err, res) => {
//         expect(res).to.have.status(401);
//         expect(res.body.error).to.deep.equal('Unauthorized access');
//         done();
//       });
//   });
//   it('should return error if token is unathorized', (done) => {
//     chai.request(app)
//       .post('/api/v1/trips')
//       .set('Authorization', '')
//       .send(tripData)
//       .end((err, res) => {
//         expect(res).to.have.status(401);
//         expect(res.body.error).to.deep.equal('Unauthorized access');
//         done();
//       });
//   });
//   it('should return error if a field is missing', (done) => {
//     chai.request(app)
//       .post('/api/v1/trips')
//       .set('Authorization', userToken)
//       .send({
//         seatingCapacity: 50,
//         fare: 20000,
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(400);
//         done();
//       });
//   });
//   it('should return all trips', (done) => {
//     chai.request(app)
//       .get('/api/v1/trips')
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
//   it('should return error if trip doesnt exist', (done) => {
//     chai.request(app)
//       .get('/api/v1/trips/kkdndiksdmfdm')
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         done();
//       });
//   });
//   it('should return trips by destination', (done) => {
//     chai.request(app)
//       .get('/api/v1/trips')
//       .query({ destination: 'kigali' })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
//   it('should return trips by origin', (done) => {
//     chai.request(app)
//       .get('/api/v1/trips')
//       .query({ origin: 'kampala' })
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
//   it('should return error if trip not found', (done) => {
//     chai.request(app)
//       .get(`/api/v1/trips/${2323232}`)
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         done();
//       });
//   });
//   it('should return trip if found', (done) => {
//     chai.request(app)
//       .get(`/api/v1/trips/${tripId}`)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
//   it('should return all trips', (done) => {
//     chai.request(app)
//       .get('/api/v1/trips')
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
//   it('should cancel a trip', (done) => {
//     chai.request(app)
//       .patch(`/api/v1/trips/${tripId}`)
//       .set('Authorization', userToken)
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
//   it('should return error if the to be cancelled trip doesnt exist', (done) => {
//     chai.request(app)
//       .patch(`/api/v1/trips/${87324628482}`)
//       .set('Authorization', userToken)
//       .end((err, res) => {
//         expect(res).to.have.status(404);
//         done();
//       });
//   });
// });
