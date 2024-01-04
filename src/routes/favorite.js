const express = require('express');
const router = express.Router();
const favorite = require('../controllers/favorite');

router.get('/', favorite.getAllFavorite);
router.get('/:userId', favorite.getFavoriteUser);
router.post('/', favorite.addFavorite);
router.patch('/:id', favorite.editFavorite);

module.exports = router;
