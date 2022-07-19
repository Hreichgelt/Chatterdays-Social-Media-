const { User, Thought } = require("../models");

const userControll = {
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((UserData) => {
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      // .populate("friends")
      // .populate("thoughts")
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: "No User" });
        }
        res.json(UserData);
      })
      .catch((er) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // create user
  createUser(req, res) {
    User.create(req.body)
      .then((UserData) => {
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // edit user
  editUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: "No user found" });
        }
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // delete user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: "No user found" });
        }
        return Thought.deleteMany({ _id: { $in: UserData.thoughts } });
      })
      .then(() => {
        res.json({ message: "User and thoughts deleted" });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // add friend
  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: "No user found" });
        }
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // remove friend
  deleteFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      .then((UserData) => {
        if (!UserData) {
          return res.status(404).json({ message: "No user found" });
        }
        res.json(UserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = userControll;
