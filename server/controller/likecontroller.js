
// const Like = require("../models/Like");
const Like = require("../models/likeModel");
const Post = require("../models/postModel");
// const Post = require("../models/Post");
const PostLike = async (req, res) => {
  try {
    const { name, like, postId } = req.body;
    console.log("Received Request Body:", req.body);
    // Create a new like record
    await Like.create({
      name,
      postId,
      like,
    });
    // Update the like count in the corresponding post
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $inc: { likeCount: 1 } },
      { new: true }
    );
    if (!updatedPost) {
      console.log(`Post with ID ${postId} not found`);
      return res.status(404).json({ error: 'Post not found' });
    }
    console.log('Updated Post:', updatedPost);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.log("The Error In liking the post is ", error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = PostLike;
