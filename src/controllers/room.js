const Room = require('../models/room');

module.exports.getAllRoom = (req, res) => {
    Room.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getOneRoom = (req, res) => {
    Room.findById(req.params.id)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryInRoom = (req, res) => {
    const type = req.params.type;
    Room.find({ type })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.addRoom = (req, res) => {
    Room.find().then(() => {
        const room = new Room({
            hotel_id: req.body.hotel_id,
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            availability: req.body.availability,
        });
        room.save()
            .then((data) => res.json(data))
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    });
};
module.exports.editRoom = (req, res) => {
    Room.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
module.exports.deleteRoom = (req, res) => {
    Room.findByIdAndDelete(req.params.id, { new: true })
        .then((data) => {
            res.send(`Document has been deleted.`);
        })
        .catch((error) => {
            res.json({ message: error.message });
        });
};
