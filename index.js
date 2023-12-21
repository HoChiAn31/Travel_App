const express = require('express');
const mongoose = require('mongoose');
const db = require('./src/config/db');

const userRoute = require('./src/routes/user');
const authRoute = require('./src/routes/auth');
const countryRoute = require('./src/routes/country');
const locationRoute = require('./src/routes/location');
const hotelRoute = require('./src/routes/hotel');
const reviewRoute = require('./src/routes/review');
const roomRoute = require('./src/routes/room');
const bookRoute = require('./src/routes/book');

db.connect();
const app = express();

app.use(express.json());
app.use('/', (req, res) => res.send('Hello World!'));
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/country', countryRoute);
app.use('/location', locationRoute);
app.use('/hotel', hotelRoute);
app.use('/review', reviewRoute);
app.use('/room', roomRoute);
app.use('/book', bookRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}`));
