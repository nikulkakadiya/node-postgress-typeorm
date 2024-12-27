const express = require('express');
const { createBook, getBook } = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express();

router.post('/createBook',authMiddleware, createBook)
router.get('/',authMiddleware, getBook)

module.exports = router;