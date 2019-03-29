'use strict';

const express = require('express');
const router = express.Router();

const UsersController = require('../controllers/users')

router.get('/users', UsersController.getUsers);

router.post('/user', UsersController.createUser);

module.exports = router;
