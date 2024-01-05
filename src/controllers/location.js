const countryLocation = require('../models/location');

module.exports.getAllCountry = (req, res) => {
    // const sort = req.query.sort == 'desc' ? 1 : -1;
    countryLocation
        .find()
        // .sort({ rating: sort })
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
    const isoCountryCode = req.params.isoCountryCode;
    countryLocation
        .find({ isoCountryCode })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addCountry = (req, res) => {
    countryLocation.find().then(() => {
        const countries = new countryLocation({
            country_id: req.body.country_id,
            country: req.body.country,
            isoCountryCode: req.body.isoCountryCode,
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            image: req.body.image,
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
