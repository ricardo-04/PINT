const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/create', loginController.create);
router.post('/login', loginController.login);
router.post('/google-login', loginController.googleLogin);

module.exports = router;
