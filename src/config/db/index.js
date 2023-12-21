const mongoose = require('mongoose');
require('dotenv').config();
const mongoString = process.env.DATABASE_URL;
// const mongoString = 'mongodb+srv://20521046:RgdYRMxb2I6GxmrP@cluster0.djapitx.mongodb.net/';

async function connect() {
    mongoose
        .connect(mongoString)
        //    {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     // useCreateIndex: true,
        // }

        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
}

module.exports = { connect };
