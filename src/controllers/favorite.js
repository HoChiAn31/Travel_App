const Favorite = require('../models/favorite');

module.exports.getAllFavorite = (req, res) => {
    Favorite.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getFavoriteUser = (req, res) => {
    const userId = req.params.userId;
    Favorite.find({ userId })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};

module.exports.addFavorite = (req, res) => {
    Favorite.find().then(() => {
        const favorite = new Favorite({
            listHotel: req.body.listHotel,
            userId: req.body.userId,
        });
        favorite
            .save()
            .then((data) => res.json(data))
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    });
};
module.exports.editFavorite = (req, res) => {
    Favorite.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
