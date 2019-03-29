import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const Schema = mongoose.Schema;

const validRole = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} it is not a permitted role'
};

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is necesary']
    },
    surname: {
        type: String,
        required: [true, 'surname is necesary']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Email is necesary']
    },
    password: {
        type: String,
        required: [true, 'Password is necesary']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        enum: validRole
    },
    Created_date: {
        type: Date,
        default: Date.now
    }
})


UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });

module.exports = mongoose.model('User', UserSchema);

