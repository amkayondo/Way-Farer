import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const newtrip = new Trip();
const createTrip = async (req, res) => {
  try {
    const availableSeats = parseInt(req.body.seating_capacity);
    const data = {
      seating_capacity: parseInt(req.body.seating_capacity),
      available_seats: availableSeats,
      bus_license_number: req.body.bus_license_number,
      origin: req.body.origin,
      destination: req.body.destination,
      trip_date: req.body.trip_date,
      fare: parseInt(req.body.fare),
      status: 'active',
    };
    const trpExists = await newtrip.getTripBylience(data.bus_license_number, data.trip_date);
    const getTrip = trpExists.rows;
    if (getTrip.length === 0){
      const nwdata = await newtrip.creatAtrip(data);
      const trip_data = nwdata.rows[0];
      return resPonse.successData(res, 201, 'Trip successfully created', trip_data);
    }
    if (trpExists.rowCount === 1){
      return resPonse.errorMessage(res, 400, `Bus with bus_license_number ${data.bus_license_number} is ready booked on ${data.trip_date}`);
    }
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};
module.exports = createTrip;
