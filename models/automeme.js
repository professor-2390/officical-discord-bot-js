const mongoose = require('mongoose')

const automeme = new mongoose.Schema({
    guild: String,
    channel: String
})

module.exports = mongoose.model("automeme", automeme);