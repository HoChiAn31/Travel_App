const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    listHotel: {
        type: [String],
        // required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
});

module.exports = mongoose.model('favorite', favoriteSchema);
