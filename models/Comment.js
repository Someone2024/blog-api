const  mongoose = require("mongoose")

const CommentSchmema = mongoose.Schema({
    author: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: String, required: true},
    parentPost: {type: mongoose.Types.ObjectId, required: true}//required: true}
})

module.exports = mongoose.model("Comment", CommentSchmema)