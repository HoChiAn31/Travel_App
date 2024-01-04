const Book = require('../models/book');

module.exports.getAllBook = (req, res) => {
    Book.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getOneBook = (req, res) => {
    Book.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryInBook = (req, res) => {
    const user_id = req.params.user_id;
    Book.find({ user_id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addBook = (req, res) => {
    Book.find().then(() => {
        const book = new Book({
            user_id: req.body.user_id,
            hotel_id: req.body.hotel_id,
            hotel_name: req.body.hotel_name,
            room_id: req.body.room_id,
            room_name: req.body.room_name,
            CheckInDate: req.body.CheckInDate,
            CheckOutDate: req.body.CheckOutDate,
            TotalAmount: req.body.TotalAmount,
        });
        book.save()
            .then((data) => res.json(data))
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    });
};
module.exports.editBook = (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteBook = (req, res) => {
    res.send(req.params.id);
    // Book.findByIdAndDelete(req.params.id, { new: true })
    //     .then((data) => {
    //         res.send(`Document has been deleted.`);
    //     })
    //     .catch((error) => {
    //         res.json({ message: error.message });
    //     });
};
