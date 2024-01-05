const country = require('../models/country');
module.exports.getAllCountry = (req, res) => {
    country
        .find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getOneCountry = (req, res) => {
    country
        .findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addCountry = (req, res) => {
    country.find().then(() => {
        const countries = new country({
            name: req.body.name,
            isoCountryCode: req.body.isoCountryCode,
            description: req.body.description,
            image: req.body.image,
            region: req.body.region,
        });
        countries
            .save()
            .then((country) => res.json(country))
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    });
};
module.exports.editCountry = (req, res) => {
    country
        .findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteCountry = (req, res) => {
    country
        .findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
