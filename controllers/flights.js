const Flight = require('../models/flight');

module.exports = {
  new: newFlight,
  create,
  index
};

function newFlight(req, res) {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  // Format the date for the value attribute of the input
  let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('flights/new', { departsDate });
}

function create(req, res) {
  req.body.flightNo.trim();
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.render('flights/new');
    console.log(flight);
    res.redirect('/flights');
  });
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    if (err) return res.redirect('/');
    flights = flights.sort((a, b) => a.departs - b.departs);
    res.render('flights/index', { flights });
  });
}
