const express = require('express');
const router = express.Router();
const PostsController = require("../Controllers/PostsController")
const CommentsController = require("../Controllers/CommentsController")
const authController = require("../Controllers/JWTController")
const checkAuth = require("../Controllers/checkAuth")

router.post("/login", authController.login)

router.get("/posts/", PostsController.GETAllPosts)
router.get("/posts/:postid", PostsController.GETPost)

router.get("/posts/:postid/comments/", CommentsController.GETAllComments)
router.get("/posts/:postid/comments/:commentid", CommentsController.GETComment)

router.post("/posts/create-post", checkAuth.checkAuth, PostsController.createPost)
router.post("/posts/:postid/comments/create-comment", checkAuth.checkAuth, CommentsController.createComment)

router.put("/posts/update-post/:postid", checkAuth.checkAuth, PostsController.updatePost)

router.delete("/posts/delete-post/:postid", checkAuth.checkAuth, PostsController.deletePost)
router.delete("/posts/:postid/comments/delete-comment/:commentid", checkAuth.checkAuth, CommentsController.deleteComment)

module.exports = router;