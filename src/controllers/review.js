const Review = require('../models/review');

module.exports.getAllReview = (req, res) => {
    Review.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getReview = (req, res) => {
    Review.findById(req.params._id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getReviewByHotel = (req, res) => {
    Review.find({ hotel_id: req.params.hotel_id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addReview = (req, res) => {
    Review.find().then(() => {
        const user = new user({
            hotel_id: req.body.hotel_id,
            content: req.body.content,
            rating: req.body.rating,
            user_id: req.body.user_id,
            username: req.body.username,
            image: req.body.image,
        });
        user.save()
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
    });
};
module.exports.editReview = (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteReview = (req, res) => {
    Review.findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
