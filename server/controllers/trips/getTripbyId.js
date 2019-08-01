import resPonse from '../../helpers/responses/response';
import Trip from '../../models/trips';

const getTripbyId = (req, res) => {
  const inpuT = req.params.tripId;
  const foundTrip = Trip.findTrip(inpuT);
  if (foundTrip) {
    return resPonse.successData(res, 200, foundTrip);
  } resPonse.errorMessage(res, 400, `No Trip found with Id ${inpuT}`);
  return true;
};
module.exports = getTripbyId;
