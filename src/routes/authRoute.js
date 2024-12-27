const express = require('express');
const { registration, login, getCustomer } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register',registration);
router.post('/login',login);
router.get('/getCustomer',authMiddleware,getCustomer);

module.exports = router;