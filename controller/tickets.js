const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

function show(req, res, next) {
  Ticket.find({}, (err, tickets) => {
    res.render("flight/ticket", {
      title: "Add Ticket",
      tickets,
      id: req.params.id,
    });
  });
}

function create(req, res) {
  console.log("id", req.params.id);
  console.log("body", req.body);
  const price = parseInt(req.body.price);
  req.body.price = price;
  Ticket.create({ ...req.body, flight: req.params.id }, (err, ticket) => {
    Flight.findById(req.params.id, (err, flight) => {
      // console.log(err);
      // console.log(ticket._id);
      // console.log(flight);
      flight.ticket.push(ticket._id);
      flight.save(() => {
        res.redirect("/allflight");
      });
    });
  });
}



module.exports = {
  show,
  create,
};
