const { User, Thought } = require('../models');

const userControll = {
    getUsers(req, res) {
        User.find()
        .select('-__v')
        .then((UserData) => {
            res.json(UserData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    getOneUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('friends')
        .populate('thoughts')
        .then((UserData) => {
            if (!UserData) {
                return res.status(404).json({ message: 'No User' });
            }
            res.json(UserData);
        })
        .catch((er) => {
            console.log(err);
            res.status(500).json(err);
        });
    }
}