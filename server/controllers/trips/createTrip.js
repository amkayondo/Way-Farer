import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';
import tripData from '../../util/trips/newTripData';

const newtrip = new Trip();
const createTrip = async (req, res) => {
  const {
    seating_capacity, bus_license_number, fare, trip_date, destination, origin,
  } = req.body;
  const data = tripData(parseInt(req.body.seating_capacity), parseInt(seating_capacity),
    bus_license_number, origin, destination, trip_date, parseInt(fare));
  const trpExists = await newtrip.getTripBylience(data.bus_license_number,
    data.trip_date, data.status);
  if (trpExists.rows.length === 0){
    const newdata = await newtrip.creatAtrip(data);
    return resPonse.successData(res, 201, 'trip successfully created', newdata.rows[0]);
  }
  if (trpExists.rows.length === 1){
    resPonse.errorMessage(res, 400,
      `Bus with bus_license_number ${data.bus_license_number} is ready booked on ${data.trip_date}`);
  }
};
module.exports = createTrip;
