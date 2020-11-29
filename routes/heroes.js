const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroescontroller');

router.get('/', heroesController.allHero);

router.get('/detalle/:id', heroesController.buscar);

router.get('/detalle/bio/:id/:ok?',heroesController.bio);

module.exports = router;