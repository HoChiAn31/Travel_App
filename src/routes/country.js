const express = require('express');
const router = express.Router();
const country = require('../controllers/country');

router.get('/', country.getAllCountry);
router.get('/:id', country.getOneCountry);
router.post('/', country.addCountry);
router.put('/:id', country.editCountry);
router.patch('/:id', country.editCountry);
router.delete('/:id', country.deleteCountry);
module.exports = router;
