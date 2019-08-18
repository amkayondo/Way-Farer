const tripdata = (getUser, trpData, number_of_seats) => ({
  user_id: getUser.user_id,
  bus_license_number: trpData.bus_license_number,
  trip_date: trpData.trip_date,
  number_of_Seats: number_of_seats,
  first_name: getUser.first_name,
  last_name: getUser.last_name,
  email: getUser.email,
});
module.exports = tripdata;
