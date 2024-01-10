require("dotenv").config() 
const express= require("express")
const mongoDB = require("./database/db")
const Router= require("./router/router")
const app= express()
const PORT=8000
const cors= require("cors")
const corsOption={
    origin:"https://659ebd0f272ad10977eaf60f--iridescent-daifuku-4cbd80.netlify.app",
    methods:"GET, POST, PUT ,PATCH, DELETE, HEAD",
    // crendetials:true ,
    credentials: true
}  
app.use(cors(corsOption)) 
app.use(express.json())    
app.use("/api", Router)  
mongoDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`our server is running at port no ${PORT}`)
    })
}) 