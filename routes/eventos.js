const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/EventoController');

// Rutas para eventos
router.post('/agregar', EventoController.agregar);
router.get('/listar', EventoController.listar);

module.exports = router;
