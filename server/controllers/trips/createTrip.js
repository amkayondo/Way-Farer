import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const newtrip = new Trip();
const createTrip = async (req, res) => {
  try {
    const {
      seatingcapacity, buslicensenumber, origin, destination, tripdate, fare,
    } = req.body;

    const avSeats = seatingcapacity;
    const data = {
      seatingcapacity: parseInt(seatingcapacity),
      availableseats: parseInt(avSeats),
      buslicensenumber,
      origin,
      destination,
      tripdate,
      fare: parseInt(fare),
      status: 'active',
    };
    newtrip.creatAtrip(data);
    return resPonse.successData(res, 201, data);
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};
module.exports = createTrip;
