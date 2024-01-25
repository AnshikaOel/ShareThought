const express=require('express')
const bodyParser=require('body-parser')
const { generateOTP, getOTP } = require('./generateOTP')
const app=express()
const port = 5000;

app.use(bodyParser.json())

app.post('/geneateOTP',(req,res)=>{
    generateOTP()
    res.json({otp:getOTP()})
})

app.listen(port,()=>{
    console.log("Server is running on port 3000")
})
