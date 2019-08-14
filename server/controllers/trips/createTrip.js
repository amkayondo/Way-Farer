import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const newtrip = new Trip();
const createTrip = async (req, res) => {
  try {
    const data = {
      seating_capacity: parseInt(req.body.seating_capacity),
      available_seats: parseInt(req.body.seating_capacity),
      bus_license_number: req.body.bus_license_number,
      origin: req.body.origin,
      destination: req.body.destination,
      trip_date: req.body.trip_date,
      fare: parseInt(req.body.fare),
      status: 'active',
    };
    newtrip.creatAtrip(data);
    return resPonse.successData(res, 201, 'Trip successfully created', data);
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};
module.exports = createTrip;
