// import mongoose from 'mongoose';
const mongoose= require("mongoose")
const options = { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' };
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        // unique: true
    },
    email: {
        type: String,
        required: true,
        // trim: true,
        // unique: true
    },
    userId: {
        type: String,
        // required: true,
        // trim: true,
        // unique: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    categories: {
        type: Array,
        required: true  
    },
 
    createdDate: {
        type: String,
        
        default: () => new Date().toDateString()
      
    },
    
 
});


const Post = new mongoose.model('Post', PostSchema);

module.exports= Post