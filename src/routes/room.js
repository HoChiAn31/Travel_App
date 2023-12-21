const express = require('express');
const router = express.Router();
const room = require('../controllers/room');

router.get('/', room.getAllRoom);
router.get('/:id', room.getOneRoom);
router.get('/categories/:type', room.getCategoryInRoom);
router.post('/', room.addRoom);
router.put('/:id', room.editRoom);
router.patch('/:id', room.editRoom);
router.delete('/:id', room.deleteRoom);
module.exports = router;
