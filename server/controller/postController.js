const Post = require("../models/postModel");
const User = require("../models/userModel"); // Make sure to import the User model
const mongoose= require("mongoose")

const PostData = async (req, res) => {
  try {
    // const { category } = req.query;
    const { title, description, picture, categories, createdDate, name, userId,email } = req.body;
  

    const PostCreated = await Post.create({
      title,
      description,
      picture,
      categories,
      createdDate,
      name,
      userId,
      email,
      user:req.body.User_id 
    });
const savepost= await PostCreated.save()
    // console.log(PostCreated);
    console.log(savepost);
    // res.status(200).json(PostCreated);
    res.status(200).json(savepost);
  } catch (error) {
    console.log("The Error During Post is", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const FetchPost = async (req, res) => {
  try {
    // const { category } = req.query;

    // Your logic to fetch posts from the database based on the category
    // const blogPosts = await Post.find({ categories: category });
    const blogPosts = await Post.find().populate('user'); 
    // console.log("The Post Data is ", blogPosts);
    res.json(blogPosts);
  } catch (error) {
    console.log("The error in getting the post data is ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
//fetching by id
const FetchPostById = async (req, res) => {
  const postId = req.params.id;  
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
//fetchPostBy UserId or all post of user
const FetchUserPost = async (req, res) => {
  const userId = req.params.id;
  try {
    const posts = await Post.find({ userId: userId });
    if (!posts || posts.length === 0) {
      return res.status(404).json({ error: 'No posts found for the user' });
    }
    res.json(posts);
  } catch (error) {
    console.error('Error fetching posts by user ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = { PostData, FetchPost , FetchPostById, FetchUserPost};
