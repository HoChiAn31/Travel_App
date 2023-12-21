const express = require('express');
const router = express.Router();
const countryLocation = require('../controllers/location');

router.get('/', countryLocation.getAllCountry);
router.get('/:id', countryLocation.getOneCountry);
router.get('/categories/:country', countryLocation.getCategoryInCountry);
router.post('/', countryLocation.addCountry);
router.put('/:id', countryLocation.editCountry);
router.patch('/:id', countryLocation.editCountry);
router.delete('/:id', countryLocation.deleteCountry);
module.exports = router;
