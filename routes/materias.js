const express = require('express');
const router = express.Router();
const MateriaController = require('../controllers/MateriaController');

// Rutas para materias
router.post('/agregar', MateriaController.agregar);
router.get('/listar', MateriaController.listar);


module.exports = router;
