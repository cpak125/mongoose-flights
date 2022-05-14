const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');


/* All routes start with '/flights'  */

// GET /flights (index - show all flights)
router.get('/', flightsCtrl.index);

// GET /flights/new (new - render 'new' form)
router.get('/new', flightsCtrl.new);

// GET /flight/:id (show functionality - show single flight)
router.get('/:id', flightsCtrl.show);


// POST /flights (create - create a flight)
router.post('/', flightsCtrl.create);


module.exports = router;
