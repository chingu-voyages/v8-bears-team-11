"use strict";
import Patient from "../models/patient";

export async function getPatients(req, res) {
  try {
    const patients = await Patient.find();
    if (!patients) {
      return res.status(500).json({
        read: false,
        mensaje: "Error al leer pacientes"
      });
    }
    res.status(200).json({
      read: true,
      pacientes: patients
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "There is a problem in the server " + err });
  }
}

export async function getOnePatient(req, res) {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.status(500).json({
        read: false,
        mensaje: "Error al leer el paciente"
      });
    }
    res.status(200).json({
      read: true,
      paciente: patient
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "There is a problem in the server " + err });
  }
}

export async function createPatient(req, res) {
  try {
    const {
      name,
      surname,
      patientNumber,
      dateOfBirth,
      gender,
      email,
      phoneNumber,
      address,
      photo
    } = req.body;
    const patient = new Patient({
      name,
      surname,
      patientNumber,
      dateOfBirth,
      gender,
      email,
      phoneNumber,
      address,
      photo
    });
    patient.save((err, patientSaved) => {
      if (err) {
        return res.status(400).json({
          created: false,
          mensaje: "Error al crear paciente",
          errors: err
        });
      }
      res.status(201).json({
        created: true,
        paciente: patientSaved
      });
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "There is a problem in the server " + err });
  }
}

export async function updatePatient(req, res) {
  try {
    const {
      name,
      surname,
      patientNumber,
      dateOfBirth,
      gender,
      email,
      phoneNumber,
      address,
      photo
    } = req.body;
    const newPatient = {
      name,
      surname,
      patientNumber,
      dateOfBirth,
      gender,
      email,
      phoneNumber,
      address,
      photo
    };
    const patient = await Patient.findByIdAndUpdate(req.params.id, req.body);
    if (!patient) {
      return res.status(400).json({
        updated: false,
        mensaje: "The patient with" + req.params.id + " dosent exits",
        errors: { message: "there is not patient with that id" }
      });
    }
    res.status(200).json({
      updated: true,
      patient: patient
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "There is a problem in the server " + err });
  }
}

export async function deletePatient(req, res) {
  try {
    const patient = await Patient.findByIdAndRemove(req.params.id);
    if (!patient) {
      return res.status(400).json({
        deleted: false,
        mensaje: "There is no patient for that id",
        errors: { message: "Sorry we dont have that patient" }
      });
    }
    res.status(200).json({
      deleted: true,
      paciente: patient
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: "There is a problem in the server " + err });
  }
}
