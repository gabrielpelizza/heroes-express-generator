const express = require('express');
const router = express.Router();
const creditosController = require('../controllers/creditoscontroller');

router.get('/', creditosController.creditos)

module.exports = router;