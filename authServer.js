require('dotenv').config()
const express = require("express")
const bcrypt = require("bcrypt")
const cors = require('cors');
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')
const mongoose = require("mongoose")
 
const app = express()
app.use(cookieparser())
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true,
    methods: ['GET','POST']
}))


const mongoUrl =
  "mongodb+srv://tashwinsjprof:5CmzDHToOctChePM@cluster0.vpuvwkf.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));


const UserDetailsScehma = new mongoose.Schema(
    {
      name : String , 
      password : String  ,
      token : String
       
    },
    {
      collection: "UserInfo",
    }
  );
  
  mongoose.model("UserInfo", UserDetailsScehma);
  
  const useme = mongoose.model("UserInfo");






const generateAccessToken = (user)=>{
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{'expiresIn':'24h'})
    return accessToken
}

const findUser = (userName)=>{
    const user = users.find(user=>user.name==userName)
    return user
}

app.post("/signup",async (req,res)=>{
    console.log(req)
    try{
        const hashedPasswd = await bcrypt.hash(req.body.password,10)
        const user = { name: req.body.username, passwd: hashedPasswd}
        users.push(user)
        console.log(user)
        res.sendStatus(201)
    }
    catch{
        res.sendStatus(500)
    }
})

app.post("/login", async (req,res)=>{
    
    const user = await useme.findOne({name: req.body.username });
    const updatetoken = async (_id ,atoken)=>{
        try{
            const res = await useme.updateOne({_id} ,{
                $set :{token : atoken}
            })
        }
        catch(err){
            console.log(err)
        }
    }

    const umber = {name : user.name , password : user.password } ; 
    if(user==null){
        res.status(400).send({success:false})
    }
    else{
    bcrypt.compare(req.body.password,user.password,(err,match)=>{
        if(err){
            res.status(500).send("Server Error")
        }
       
        else if(match){
            const accessToken = generateAccessToken(umber)
            updatetoken(user._id ,accessToken)
            res.cookie("accessToken",accessToken,{
                httpOnly:true,
                expires:new Date(Date.now()+24*60*60*1000),
                //secure: true -------------------------> uncomment if we use https
            })
            res.send({success:true})
        }
        else{
            res.send({success:false})
        }
    }) 
    }
})


app.listen(8000)