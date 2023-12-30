const express = require('express');
const router = express.Router();
const room = require('../controllers/room');

router.get('/', room.getAllRoom);
router.get('/search', room.getSearchRoom);
router.get('/:id', room.getOneRoom);
router.get('/categories/:type', room.getCategoryInRoom);
router.get('/caterorieshotel/:hotel_id', room.getCategoryInRoomHotel);
router.get('/searchhotel/:hotel_id', room.getCategoryInRoomHotelSearch);
router.post('/', room.addRoom);
router.put('/:id', room.editRoom);
router.patch('/:id', room.editRoom);
router.delete('/:id', room.deleteRoom);
module.exports = router;
