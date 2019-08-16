import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();
const getTripbyId = async (req, res) => {
  const admin = jwt.decode(req.headers.authorization);
  const { tripId } = req.params;
  const foundTrip = await trip.findTrip(tripId);
  return resPonse.successData(res, 200, 'Trip found', foundTrip.rows[0]);
};
module.exports = getTripbyId;
