import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const Schema = mongoose.Schema;

const PatientSchema = new Schema({
  name: { type: String, required: [true, "Name is necesary"] },
  surname: { type: String, required: [true, "surname is necesary"] },
  patientNumber: {
    type: Number,
    required: [true, "Patient number is necessary"]
  },
  dateOfBirth: { type: Date, required: [true, " Date of Birth is necesary"] },
  gender: String,
  email: { type: String, unique: true, lowercase: true },
  phoneNumber: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String
  },
  photo: String
});

PatientSchema.plugin(uniqueValidator, { message: "{PATH} must be unique" });

module.exports = mongoose.model("Patient", PatientSchema);
