import express from 'express';
import * as swaggerUI from 'swagger-ui-express';
import PORT from './config/port';
import doc from '../swagger.json';
import userRouter from './routes/users/userRoutes';
import tripRouter from './routes/trips/tripRouter';
import createBooking from './routes/bookings/bookingRouter';

const app = express();

app.use(express.json());

app.use(express.urlencoded());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(doc));


app.get('/', (req, res) => res.status(200).json({ message: 'navigate to /api/v1' }));
app.use('/api/v1', userRouter, tripRouter, createBooking);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`RUNNING ON PORT ${PORT}`));

module.exports = app;
