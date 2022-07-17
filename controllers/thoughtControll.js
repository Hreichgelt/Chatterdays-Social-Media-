const { Thought, User } = require('../models');

const thoughtControll = {
    getThoughts(req, res) {
        Thought.find()
        .sort({ createdAt: -1 })
        .then((thoughtData) => {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },

    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thoughtData) => {
            if (!thoughtData) {
                return res.status(404).json({ message: 'No Thoughts' });
            }
            res.json(thoughtData);
        })
        .catch((er) => {
            console.log(err);
            res.status(500).json(err);
        });
    }
}
