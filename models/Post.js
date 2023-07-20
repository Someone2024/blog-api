const mongoose = require("mongoose")

const PostSchmema = mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: String, required: true},
    published: {type: Boolean, required: true}
})

module.exports = mongoose.model("Post", PostSchmema)