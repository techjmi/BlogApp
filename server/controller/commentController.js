// import Comment = require("../models/commentsModel")
const Comment = require("../models/commentsModel");

const PostComment=async(req,res)=>{
    try {
        const{comments, name, createdDate, postId} =req.body
        const CommentCreated= await Comment.create({
            comments,
            name,
            createdDate,
            postId

        })
        console.log(CommentCreated)
        res.status(200).json(CommentCreated)
    } catch (error) {
        console.log("The Error In posting the comment is ", error.message)
    }
}
const fetchComments= async(req,res)=>{
    const postId = req.params.id;
    const comment= await Comment.find({ postId: postId })
    res.status(200).json(comment)
    console.log("The Comment is " ,comment)
}
module.exports={PostComment, fetchComments}