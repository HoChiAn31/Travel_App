const express = require('express');
const router = express.Router();
const book = require('../controllers/book');

router.get('/', book.getAllBook);
router.get('/:id', book.getOneBook);
router.get('/categories/:user_id', book.getCategoryInBook);
router.post('/', book.addBook);
router.put('/:id', book.editBook);
router.patch('/:id', book.editBook);
router.delete('/:id', book.deleteBook);
module.exports = router;
