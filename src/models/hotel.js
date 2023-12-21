const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    countryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'country',
        required: true,
    },
    country: {
        type: mongoose.Schema.Types.String,
        ref: 'country',
        required: true,
    },
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    location: {
        required: true,
        type: String,
    },
    image: {
        required: false,
        type: String,
    },
    coordinates: [
        {
            _id: false,
            latitude: {
                required: true,
                type: Number,
            },
            longitude: {
                required: true,
                type: Number,
            },
        },
    ],
    rating: {
        required: false,
        type: Number,
    },
    price: {
        required: true,
        type: Number,
    },
});

module.exports = mongoose.model('hotel', hotelSchema);
