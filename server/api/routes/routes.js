'use strict';

import express from 'express';
import { getUsers, createUser, updateUser, deleteUser} from '../controllers/users';
import { login } from '../controllers/login';
import { authToken } from '../middlewares/auth-token';

const router = express.Router();

//CRUD USERS
router.get('/users', getUsers);
router.post('/user', createUser);
router.put('/user/:userId', authToken, updateUser);
router.delete('/user/:userId', deleteUser);

// LOGIN
router.post('/login', login);

module.exports = router;
