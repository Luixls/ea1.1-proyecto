const express = require('express');
const router = express.Router();
const ProfesorController = require('../controllers/ProfesorController');

router.post('/agregar', ProfesorController.agregar);
router.get('/listar', ProfesorController.listar);


module.exports = router;