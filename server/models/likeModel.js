const mongoose= require("mongoose")
const likeSchema = new mongoose.Schema({
    name:{
        type:String,
    
    },
    like:{
        type:Number,
        default:0
    },
    postId:{
        type:String
    }

})
const Like= new mongoose.model("Like", likeSchema)
module.exports= Like