const { Schema, model, } = require("mongoose");

// user schema -

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    // match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  },
  thoughts: [{
    type: Schema.Types.ObjectId,
    ref: 'thought'
  }],
  friends: [Schema.Types.ObjectId],
},
{
    toJSON: {
        virtuals: true, 
    },
    id: true 
}
);

const User = model('user', userSchema);

module.exports = User


