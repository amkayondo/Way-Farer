import jwt from 'jsonwebtoken';
import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const trip = new Trip();
const getTripbyId = async (req, res) => {
  const admin = jwt.decode(req.headers.authorization);
  const { tripId } = req.params;
  try {
    const foundTrip = await trip.findTrip(tripId);
    if (admin.isadmin === true){
      return resPonse.successData(res, 404, 'Trip found', foundTrip.rows[0]);
    }
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = getTripbyId;
