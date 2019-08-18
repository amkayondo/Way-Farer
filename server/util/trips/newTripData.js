const tripData = (seating_capacity, availableSeats, bus_license_number,
  origin, destination, trip_date, fare) => ({
  seating_capacity,
  availableSeats,
  bus_license_number,
  origin,
  destination,
  trip_date,
  fare,
  status: 'active',
});
module.exports = tripData;
