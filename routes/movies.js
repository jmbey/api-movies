const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController')

router.get('/', moviesController.prueba);

module.exports = router;