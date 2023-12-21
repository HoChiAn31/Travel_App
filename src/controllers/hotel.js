const Hotel = require('../models/hotel');

module.exports.getAllHotel = (req, res) => {
    Hotel.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getOneHotel = (req, res) => {
    Hotel.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryInHotel = (req, res) => {
    const country = req.params.country;
    Hotel.find({ country })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addHotel = (req, res) => {
    Hotel.find().then(() => {
        const hotel = new Hotel({
            countryId: req.body.countryId,
            country: req.body.country,
            title: req.body.title,
            description: req.body.description,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            location: req.body.location,
            image: req.body.image,
            rating: req.body.rating,
            price: req.body.price,
        });
        hotel
            .save()
            .then((data) => res.json(data))
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    });
};
module.exports.editHotel = (req, res) => {
    Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteHotel = (req, res) => {
    Hotel.findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
