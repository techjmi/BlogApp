const mongoose= require("mongoose")
const CommentSchema= new mongoose.Schema({
    comments:{
        type:String,
        trim:true,
    },
    name:{
        type:String,
        // trim:true,
    },
    postId:{
        type:String,
        // trim:true,
    },
    createdDate: {
        type: String,
        
        default: () => new Date().toDateString()
      
    },
})
const Comment= new mongoose.model("Comment", CommentSchema)
module.exports= Comment