const { Schema, model } = require('mongoose');
const reactionSchema = require('./reaction');
const dateFormat = require('../utils/dateFormat');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 10,
            maxLength: 180
        },
        createdAt: {
            type: Date, 
            default: Date.now
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const reactionSchema = new Schema({
    reactionText: {
        type: String,
        required: true, 
        minLength: 10,
        maxLength: 100
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
})

const Thought = model('thought', thoughtSchema);

module.exports = Thoughts;