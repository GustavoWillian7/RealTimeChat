const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    author: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Message', MessageSchema)
