const mongoose= require("mongoose")
const bcrypt= require("bcryptjs")
const jwt= require("jsonwebtoken")
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
})
//web token creation
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin
        }  ,
        process.env.JWT_SECRET
        ,
        {
            expiresIn:"30d"
        }
        )
    } catch (error) {
        console.error(error)
    }
}
//post model
//hash password
userSchema.pre("save", async function(next){
    // console.log("this method", this)
    if(!this.isModified("password"))
    {
        next()
    }
    try {
        const saltRound = 10;
        const hash_password = await bcrypt.hash(this.password, saltRound);
        this.password= hash_password
        
    } catch (error) {
        next(error)
    }
})
//post mode


// const Post = new mongoose.model('Post', PostSchema);
const User= new mongoose.model("User", userSchema)
module.exports =User