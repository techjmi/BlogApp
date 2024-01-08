const User = require("../models/userModel");
const bcrypt= require("bcryptjs")
const signup= async(req,res)=>{
    try {
        // <h1>this is simple signup page</h1>
        const { email,name, password} = req.body;
        const userExit = await User.findOne({ email });
        if (userExit) {
          res.status(400).json({ msg: "user already exit" });
        }
        const userCraeted= await User.create({
            name,
            email,
            password
        })

        console.log(userCraeted)
        res.status(200).json(userCraeted)
    } catch (error) {
        console.log("The Error during registration is ", error.message)

    }
}
//login logic
const login= async(req,res)=>{
    try {
        const{ email, password}= req.body
        const userExist= await User.findOne({email})
        console.log(userExist)
        if(!userExist){
           
            res.status(400).json({"message":"Invalid Credentail"})
        }
        const user= await bcrypt.compare(password, userExist.password)
        //if user exist then
if(user){
    res
    .status(200)
    .json({
        name:userExist.name,
        email:userExist.email,
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      message:"login sucessfull", 
    });
}else{
    res.status(401).json({message:"Invalid Email or Password"})
}
    } catch (error) { 
       console.log("Error During login process is ", error.message) 
    }

}
//get login details
const user= async(req, res)=>{
    try {
      const userData= req.user //this is from  middleware
      res.status(200).json({userData})
      console.log(userData)
    } catch (error) {
  
      console.log(`The error in the user logic is ${error.message}`)
    }
  }
  //get post data
  //read user data from User
  const FetchUser=async(req, res)=>{
try {
  const data=  await User.find()
  console.log("The fetched User Data is", data)
  res.status(200).send(data).json({"The Fetched data is": data})
} catch (error) {
  console.log("The Erro During Fetching Data is", error.message)
}
  }
  //get details by id
 //fetch user by id
 const UserById = async (req, res) => {
  const UserId = req.params.id;  
  try {
    const user = await User.findById(UserId);
    if (!user) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching User by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports= {signup, login, user, FetchUser, UserById}