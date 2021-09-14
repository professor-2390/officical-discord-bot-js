const mongoose = require('mongoose')

const warndb = new mongoose.Schema({
    guild: String,
    user: String,
    content: Array //lets try again
})

module.exports = mongoose.model("warndb", warndb);