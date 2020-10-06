const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Task = new Schema({
    task: { type: String, required: true },
    time: { type: String, required: true },
    user: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('tasks', Task)