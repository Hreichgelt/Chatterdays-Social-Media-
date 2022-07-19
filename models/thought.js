const { Schema, model } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        auto: true
    },
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
});

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



const Thought = model('Thought', thoughtSchema);

module.exports = Thought;