const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.get('/', libroController.obtenerLibros);
router.get('/disponibles', libroController.obtenerLibrosDisponibles);
router.get('/nodisponibles', libroController.obtenerLibrosNoDisponibles);

module.exports = router;
