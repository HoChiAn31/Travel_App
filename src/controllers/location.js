const countryLocation = require('../models/location');

module.exports.getAllCountry = (req, res) => {
    countryLocation
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getOneCountry = (req, res) => {
    countryLocation
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryInCountry = (req, res) => {
    const country = req.params.country;
    countryLocation
        .find({ country })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addCountry = (req, res) => {
    countryLocation.find().then(() => {
        const countries = new countryLocation({
            countryId: req.body.countryId,
            country: req.body.country,
            title: req.body.title,
            location: req.body.location,
            image: req.body.image,
            rating: req.body.rating,
            review: req.body.review,
        });
        countries
            .save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editCountry = (req, res) => {
    countryLocation
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteCountry = (req, res) => {
    countryLocation
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
