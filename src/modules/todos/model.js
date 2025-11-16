const mongoose = require('mongoose');
const { User } = require('../auth/model');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
}, {
    timestamps: true,
});

const Todo = mongoose.model('todos', todoSchema);

module.exports = { Todo };