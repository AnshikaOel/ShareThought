const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {generateOTP,getOTP,verifyOTP} = require('./OTPver');  // Import the OTPver file
const {sendemail} =require('./OTPsend');
const { consumers } = require('nodemailer/lib/xoauth2');
const fs=require('fs').promises
const path=require('path');
const { userInfo } = require('os');
// const userIndo =require('./userInfo.json')
const port = 5000;
const app = express();
let temp=true

app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.post('/generateOTP', (req, res) => {
    try{
        generateOTP();
        console.log("Generated OTP:", getOTP()); 
  res.json({ otp: getOTP() });
}catch(err){
    console.log('some error caught',err)
    res.status(500).json({err:'Internal server error'})
}
});

app.post('/sendmail',async(req,res)=>{
    const {userEmail,otp}=req.body
    try{
        await sendemail(userEmail,otp)
        res.status(200).json({success:true,message:'email sent successfully'})
    }catch(error){
        console.error('Error sending OTP email ',error)
        res.status(500).json({success:false,message:'Error sending email'})
    }
})

app.post('/verifyOTP',(req,res)=>{
    const userOTP=req.body.userOTP
    console.log('Recieved data : in server ',userOTP)

    // call the function
     let verificationstatus=verifyOTP(userOTP)
     temp=verificationstatus
    console.log("this is server "+temp)
    res.json({message:`${verificationstatus}`})

})


// saving data
app.post('/userInfo',async(req,res)=>{
    const {fname,lname,id,password}=req.body;
    const data={
        fname,
        lname,
        id,
        password
    }

    try{
        const filePath=path.join(__dirname,'userInfo.json')
        let existingInfo=[]
        try{
            const existingDataBuffer=await fs.readFile(filePath)
            existingInfo=JSON.parse(existingDataBuffer.toString())
        }catch(readError){

        }
        existingInfo.push(data)
        await fs.writeFile(filePath,JSON.stringify(existingInfo,null,2))
        res.status(200).json({success:true,message:'Data saved Successfully'})
    }catch(error){
        console.error("Error saving data : ",error)
        res.status(500).json({success:false,message:'Error saving data'})
    }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
