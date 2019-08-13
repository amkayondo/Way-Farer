import Joi from '@hapi/joi';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';
import tripSchema from '../../helpers/schema/trip';

const createTrip = async (req, res) => {
  try {
  // const result = Joi.validate(req.body, tripSchema);
  // if (result.error) {
  //   return resPonse.errorMessage(res, 400, (`${result.error.details[0].context.label}`));
  // }
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
    const trpnotfound = await Trip.getTripBylience(buslicensenumber, tripdate);
    if (trpnotfound.rows.length === 1){
      return resPonse.errorMessage(res, 400, `Bus with licensenumber ${data.buslicensenumber} is already booked on ${data.tripdate}`);
    }
    Trip.creatAtrip(newTrip);
    return resPonse.successData(res, 201, data);
  // const trpfound = await Trip.getTripBylience(buslicensenumber, tripdate);
  } catch (err){}
};
module.exports = createTrip;
