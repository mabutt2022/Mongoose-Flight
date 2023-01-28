var express = require('express');
var router = express.Router();
const flightCtrl = require('../controller/flights');
const ticketCtrl = require('../controller/tickets');


router.get('/allFlight', flightCtrl.listItems);
router.get('/addFlight', flightCtrl.addItems);
router.get('/show/:id', flightCtrl.show);
router.get('/ticket/:id', ticketCtrl.show);


router.post('/flight', flightCtrl.create);
router.post('/show/:id', flightCtrl.createDestination);
router.post('/flight/:id/tickets', ticketCtrl.create);

module.exports = router;
