const { Thought, User } = require('../models');


// find all thoughts 
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
// find one thought
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
    },

    // create thought
    createThought(req, res) {
        Thought.create(req.body)
        .then((thoughtData) => {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    }
    
};

module.exports = thoughtControll;
