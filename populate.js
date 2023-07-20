const  Post = require("./models/Post")
const Comment = require("./models/Comment.js")
const mongoose =  require("mongoose");

mongoose.set("strictQuery", false); // Prepare for Mongoose 7


main().catch((err) => console.log(err));

async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect("mongodb+srv://user:user@cluster0.4sfyma3.mongodb.net/blog_api?retryWrites=true&w=majority");
    console.log("Debug: Should be connected?");
    await createPosts();
    await createComments();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function PostCreate() {
    const post = new Post({ 
        title: "first post",
        content: "this is the very first blog post!",
        date: new Date(),
        published: true
     });
    await post.save();
    console.log(`Added post: ${post}`);
}

async function CommentCreate(index, name, description) {
    const comment = new Comment({ 
        author: "first author",
        content: "writing the first comment",
        date: new Date(),
    });
     
    await comment.save();
    console.log(`Added comment: ${comment}`);
}

async function createPosts() {
    console.log("Adding categories");
    await PostCreate()
}

async function createComments() {
    await CommentCreate()
}