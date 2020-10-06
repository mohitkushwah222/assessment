const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LogTime = new Schema({
    date: { type: String, required: true },
    time: { type: String, required: true },
    project: { type: String, required: true },
    employee: { type: String, required: true }
}, { timestamps: true })

module.exports = mongoose.model('logtime', LogTime)