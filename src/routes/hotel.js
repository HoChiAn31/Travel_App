const express = require('express');
const router = express.Router();
const hotel = require('../controllers/hotel');

router.get('/', hotel.getAllHotel);
router.get('/:id', hotel.getOneHotel);
router.get('/categories/:country', hotel.getCategoryInHotel);
router.post('/', hotel.addHotel);
router.put('/:id', hotel.editHotel);
router.patch('/:id', hotel.editHotel);
router.delete('/:id', hotel.deleteHotel);
module.exports = router;
