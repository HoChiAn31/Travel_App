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
const search = (hotel_id, q, type = 'less') => {
    let query;

    switch (type) {
        case 'type':
            query = { hotel_id, type: { $regex: new RegExp(q, 'i') } };
            break;
        case 'availability':
            query = { hotel_id, availability: { $regex: new RegExp(q, 'i') } };
            break;
        default:
            throw new Error('Invalid search type');
    }

    return Room.find(query);
};
module.exports.getCategoryInRoomHotel = (req, res) => {
    const hotel_id = req.params.hotel_id;
    Room.find({ hotel_id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
};
module.exports.getCategoryInRoomHotelSearch = (req, res) => {
    const roomQuery = req.params.hotel_id;
    const { q, type } = req.query;

    search(roomQuery, q, type)
        .then((searchResults) => {
            res.json(searchResults);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};

module.exports.getSearchRoom = (req, res) => {
    const { q, type } = req.query;
    search(q, type)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};
module.exports.getSearchRoomId = (req, res) => {
    const { q, type } = req.query;
    const hotel_id = req.params.hotel_id;
    Room.find({ hotel_id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => console.log(err));
    search(q, type)
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
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
