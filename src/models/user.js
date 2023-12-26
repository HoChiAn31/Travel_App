const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: false,
        type: String,
    },
    phone: {
        required: false,
        type: Number,
    },
    email: {
        required: true,
        type: String,
    },
    image: {
        required: false,
        type: String,
    },
    username: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
});

module.exports = mongoose.model('user', userSchema);
