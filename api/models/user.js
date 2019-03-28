
'use strict';
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

mongoose.model('User', UserSchema);
