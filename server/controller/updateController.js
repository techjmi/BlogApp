const Post = require("../models/postModel");

const UpdatePost=async(req,res)=>{
    try{
        const _id= req.params.id;
const updateData= await Post.findByIdAndUpdate(_id, req.body,{
    new:true
});
res.send(updateData)
    }catch(err){
        res.status(404).send(err)

    }
}
const DeletePost=async(req,res)=>{
    try{
        const _id= req.params.id;
const updateData= await Post.findByIdAndDelete(_id, req.body,{
    new:true
});
res.send(updateData)
    }catch(err){
        res.status(404).send(err)

    }
}
module.exports = { UpdatePost,DeletePost };