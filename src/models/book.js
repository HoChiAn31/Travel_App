const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    user_name: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'user',
    },
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'hotel',
    },
    hotel_name: {
        type: mongoose.Schema.Types.String,
        required: false,
        ref: 'hotel',
    },
    room_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'room',
    },
    room_name: {
        type: mongoose.Schema.Types.String,
        required: true,
        ref: 'room',
    },
    CheckInDate: {
        required: true,
        type: Date,
    },
    CheckOutDate: {
        required: true,
        type: Date,
    },
    TotalAmount: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('book', bookSchema);
