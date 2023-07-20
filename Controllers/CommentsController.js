const Comment = require("../models/Comment")

exports.GETAllComments = async (req, res) => {
    const parentPost = req.params.postid;
    const AllComments = await Comment.find({parentPost}).exec()
    res.json(AllComments)
}

exports.GETComment = async (req, res) => {
    const comment = await Comment.findById(req.params.commentid).exec()
    res.json(comment)
}

exports.createComment = async (req, res) => {
    const {author, content} = req.body
    const parentPost = req.params.postid;

    try {
        const newComment = new Comment({
            author,
            content,
            date: new Date(),
            parentPost 
        })

        await newComment.save();
        res.json({message: "comment was succesfully created with an id of" + newComment._id})
    }catch(error) {
        res.status(500).json({ message: 'Failed to create a new comment.' });
    }
}

exports.deleteComment = async(req, res) => {
    const CommentId = req.params.commentid
    try {
        const comment = await Comment.findByIdAndRemove(CommentId)
        res.json({message: "comment was successfully removed"})
    }catch(error) {
        res.status(404).json({ message: 'comment not found.' });
    }
}