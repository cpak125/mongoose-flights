const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// POST /flights/:id/destinations (create functionality - add a destination)
router.post('/flights/:id/destinations', destinationsCtrl.create);


module.exports = router;