import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const createTrip = async (req, res) => {
  try {
    const {
      seatingcapacity, buslicensenumber, origin, destination, tripdate, fare,
    } = req.body;

    const avSeats = seatingcapacity;
    const data = Trip.tripData(
      parseInt(seatingcapacity), parseInt(avSeats),
      buslicensenumber,
      origin, destination, tripdate,
      parseInt(fare), 'active',
    );
    const newTrip = [
      data.seatingcapacity,
      data.availableSeats,
      data.buslicensenumber,
      data.origin,
      data.destination,
      data.fare,
      data.tripdate,
      data.status,
    ];

    Trip.creatAtrip(newTrip);
    return resPonse.successData(res, 201, data);
  } catch (err){
    resPonse.errorMessage(res, 500, err.message);
  }
};
module.exports = createTrip;
