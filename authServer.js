require('dotenv').config()
const express = require("express")
const bcrypt = require("bcrypt")
const cors = require('cors');
const jwt = require('jsonwebtoken')


const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST','DELETE']
}))


let users = [
    {
        name: 'Srinidhi',
        passwd: '$2b$10$/hGVNJlWJOUdOKpqn8hvAu2j4ssw5tm9D.u40c0rtl0GZUrEXGskC'
    }
]

let refreshTokens = []

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

app.post("/login",(req,res)=>{
    const user = users.find(user=> user.name==req.body.username)
    if(user==null) res.sendStatus(400).send({success:false}) // is email or username is wrong
    bcrypt.compare(req.body.password,user.passwd,(err,result)=>{
        if(err) res.sendStatus(500) // if some error occurs
        if(result){
            const accessToken = jwt.sign({name:user.name},process.env.ACCESS_TOKEN_SECRET,{expiresIn : '10m'})
            const refreshToken = jwt.sign({name:user.name},process.env.REFRESH_TOKEN_SECRET)
            refreshTokens.push(refreshToken)
            res.send({success:true,accessToken:accessToken,refreshToken:refreshToken}) // if password is correct
        }
        else{
            res.send({success:false}) // if password is wrong
        }
    })
})

app.post('/token',(req,res)=>{
    const refrToken = req.body.token
    if(refrToken==null) return res.sendStatus(401) // if user doesnt send any refreshToken or he isnt logged in
    if(!refreshTokens.includes(refrToken)) return res.sendStatus(403) // if refreshToken doesnt exist in Database
    jwt.verify(refrToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403) // if refreshToken is invalid
        const accessToken = jwt.sign({name:user.name},process.env.ACCESS_TOKEN_SECRET,{expiresIn : '60s'})
        res.json({accessToken : accessToken}) // send new accessToken
    })
})

app.delete("/logout",(req,res)=>{
    const token = req.headers['authentication']
    // here token has the refreshToken of the user. Remove it from the database
    res.sendStatus(204)
})


app.listen(8000)