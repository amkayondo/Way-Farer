import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const getTripbyId = (req, res) => {
  const inpuT = req.params.tripId;
  const foundTrip = Trip.findTrip(inpuT);
  if (foundTrip) {
    return resPonse.successData(res, 'Trip successfully found', 200, foundTrip);
  } resPonse.errorMessage(res, 400, `Not Trip found with Id ${inpuT}`);
  return true;
};
module.exports = getTripbyId;
