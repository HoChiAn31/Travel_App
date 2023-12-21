const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    hotel_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel',
    },
    hotel_name: {
        required: true,
        type: mongoose.Schema.Types.String,
        ref: 'hotel',
    },
    room_name: {
        required: true,
        type: String,
    },
    type: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    price: {
        required: true,
        type: Number,
    },

    availability: {
        type: Map,
        of: Boolean,
        required: true,
    },
});

module.exports = mongoose.model('room', roomSchema);
