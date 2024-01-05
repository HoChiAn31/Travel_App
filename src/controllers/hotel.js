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
    const isoCountryCode = req.params.isoCountryCode;
    Hotel.find({ isoCountryCode })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

const search = (q, type = 'less') => {
    let query;

    switch (type) {
        case 'country':
            // Search by country
            query = { country: { $regex: new RegExp(q, 'i') } };
            break;

        // Add more cases as needed for other search types
        default:
            throw new Error('Invalid search type');
    }

    return Hotel.find(query);
};

module.exports.searchCountry = (req, res) => {
    const { q, type } = req.query;

    search(q, type)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};

module.exports.addHotel = (req, res) => {
    Hotel.find().then(() => {
        const hotel = new Hotel({
            countryId: req.body.countryId,
            country: req.body.country,
            title: req.body.title,
            isoCountryCode: req.body.isoCountryCode,
            description: req.body.description,
            coordinates: req.body.coordinates,
            // latitude: req.body.coordinates[0].latitude,
            // longitude: req.body.coordinates[0].longitude,
            location: req.body.location,
            image: req.body.image,
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
