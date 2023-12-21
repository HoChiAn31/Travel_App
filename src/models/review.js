const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    hotel_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hotel',
        required: true,
    },
    user: [
        {
            _id: false,
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user',
                required: true,
            },
            name: {
                type: mongoose.Schema.Types.String,
                ref: 'user',
                required: true,
            },
            image: {
                type: mongoose.Schema.Types.String,
                ref: 'user',
                required: true,
            },
            content: {
                type: String,
                required: true,
            },
            rating: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                required: true,
                default: Date.now,
            },
        },
    ],
});

module.exports = mongoose.model('review', reviewSchema);
