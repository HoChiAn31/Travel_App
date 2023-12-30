const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    isoCountryCode: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    image: {
        required: false,
        type: String,
    },
    region: {
        required: true,
        type: String,
    },
});

module.exports = mongoose.model('country', countrySchema);
