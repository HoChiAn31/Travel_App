const mongoose = require('mongoose');
const Country = require('./country');

const countryLocationSchema = new mongoose.Schema({
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
    location: {
        required: true,
        type: String,
    },
    image: {
        required: false,
        type: String,
    },
    rating: {
        required: false,
        type: Number,
    },
    review: {
        required: false,
        type: Number,
    },
});

module.exports = mongoose.model('countryLocation', countryLocationSchema);
