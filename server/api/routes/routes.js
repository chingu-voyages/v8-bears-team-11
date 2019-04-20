"use strict";

import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from "../controllers/users";
import {
  getPatients,
  createPatient,
  updatePatient,
  deletePatient
} from "../controllers/patients";
import { login } from "../controllers/login";
import { authToken } from "../middlewares/auth-token";

const router = express.Router();

//CRUD USERS
router.get("/users", getUsers);
router.post("/user", createUser);
router.put("/user/:userId", authToken, updateUser);
router.delete("/user/:userId", deleteUser);
//CRUD PATIENTS
router.get("/patients", getPatients);
router.post("/patient", createPatient);
router.put("/patient/:id", updatePatient);
router.delete("/patient/:id", deletePatient);
// LOGIN
router.post("/login", login);

module.exports = router;
