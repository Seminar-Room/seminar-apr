require('dotenv').config()
const express = require("express")
const cors = require('cors');
const jwt = require('jsonwebtoken')
const cookieparser = require('cookie-parser')


const app = express()
app.use(express.json())
app.use(cookieparser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET','POST']
}))

app.get('/user',authenticateToken,(req,res)=>{
    res.json(req.user)
})

function authenticateToken(req,res,next){
    const token = req.cookies.accessToken
    if(token==null || token=="") return res.sendStatus(401)
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403)
        req.user = user.name
        next()
    })
}


app.listen(6030)