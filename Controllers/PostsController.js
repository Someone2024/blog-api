const Post = require("../models/Post");

exports.GETAllPosts = async (req, res) => {
  const AllPosts = await Post.find({published: true}).exec();
  if(AllPosts) res.json(AllPosts);
  else res.status(404).json({message: "There aren't posts to show"})
};

exports.GETPost = async (req, res) => {
    const post = await Post.findById(req.params.postid).exec();
    if(post) res.json(post);
    else res.status(404).json({message: "Post was not found"})
};

exports.createPost = async (req, res) => {
    const {
        title,
        content,
        published
    } = req.body

    try {
        const newPost = await Post({
            title,
            content,
            date: new Date(),
            published
        })

        await newPost.save();
        res.json({message: "post was successfully created with an id of" + newPost._id})
    }catch(error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ message: 'Failed to create a new blog post.' });
    }
};

exports.updatePost = async(req, res) => {
    const PostId = req.params.postid
    const {
        title,
        content,
        published
    } = req.body

    try{
        const post = await Post.findByIdAndUpdate(
            PostId,
            {
                title,
                content,
                date: new Date(),
                published
            }
        )
        res.json({message: "Post was successfully updated"})
    }catch(error) {
        res.status(404).json({ message: 'blog post not found.' });
    }
}

exports.deletePost = async(req, res) => {
    const PostId = req.params.postid
    try {
        const post = await Post.findByIdAndRemove(PostId)
        res.json({message: "Post was successfully removed"})
    }catch(error) {
        res.status(404).json({ message: 'blog post not found.' });
    }
}