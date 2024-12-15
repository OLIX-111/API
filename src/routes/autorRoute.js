const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');

router.get('/', autorController.obtenerAutores);

module.exports = router;
