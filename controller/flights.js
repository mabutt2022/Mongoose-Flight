const Flight = require("../models/flight");

function listItems(req, res, next) {
  Flight.find({}, (err, flights) => {
    // console.log("All flights", flights);
    res.render("flight/allFlight", { flights });
  });
}

function addItems(req, res, next) {
  res.render("flight/addFlight", { flight: "flight" });
}

function create(req, res, next) {
  console.log(req.body);
  const flight = new Flight(req.body);
  // console.log(req.body);
  flight.save(function (err) {
    if (err) return console.log(err);
    res.redirect("/allflight");
  });
}

function show(req, res, next) {
  Flight.findById(req.params.id)
    .populate("ticket")
    .exec(function (err, flight) {
      res.render("flight/show", { title: "Flight Detail", flight });
    });
}

function createDestination(req, res, next) {
  // First find the flight that the review was create on
  Flight.findById(req.params.id, (err, flight) => {
    // add the destination to the flight
    flight.destinations.push(req.body);
    // save the changes to the flight
    flight.save((err) => {
      if (err) return console.log(err);
      res.redirect(`/show/${flight._id}`);
    });
  });
}

module.exports = {
  listItems,
  addItems,
  create,
  show,
  createDestination,
};
