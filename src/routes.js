const express = require('express');
const router = express.Router();

const PacientValidator = require('./validators/PacientValidator');

const UserController = require('./controllers/UserController');
const PacientsController = require('./controllers/PacientsController');

// Test API
router.get('/ping', (req, res) => {
  res.json({pong: true});
});

router.get('/users', UserController.getUsers);

router.get('/pacients', PacientsController.getPacients);
router.post('/pacient/register', PacientValidator.pacient, PacientsController.register);

module.exports = router;
