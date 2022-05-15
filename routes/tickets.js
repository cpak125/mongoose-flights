const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');
const ticket = require('../models/ticket');

// GET flights/:id/tickets/new (show new ticket form)
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// POST flight/:id/tickets (create new ticket for a flight)
router.post('/flights/:id/tickets', ticketsCtrl.create);


module.exports = router;
