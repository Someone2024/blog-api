const express = require('express');
const router = express.Router();
const PostsController = require("../Controllers/PostsController")
const CommentsController = require("../Controllers/CommentsController")

router.get("/posts/", PostsController.GETAllPosts)
router.get("/posts/:postid", PostsController.GETPost)

router.get("/posts/:postid/comments/", CommentsController.GETAllComments)
router.get("/posts/:postid/comments/:commentid", CommentsController.GETComment)

router.post("/posts/create-post", PostsController.createPost)
router.post("/posts/:postid/comments/create-comment", CommentsController.createComment)

router.put("/posts/update-post/:postid", PostsController.updatePost)
router.put("/posts/:postid/comments/:commentid")

router.delete("/posts/delete-post/:postid", PostsController.deletePost)
router.delete("/posts/:postid/comments/:commentid")

module.exports = router;