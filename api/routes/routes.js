'use strict';

const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users')

router.get('/user', UsersController.getUser);

module.exports = router;
