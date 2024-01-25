const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'youremai@gmail.com',
        pass:"your_email_password"
    }
})

const mailConfig={
    from:'youremai@gmail.com',
    to:'useremail@gmail.com',
    subject:'OTP Verification',
    text:`Your OTP for the verification is ${otp}`
}

transporter.sendMail(mailConfig,(err,info)=>{
    if(err){
        console.error('Error Sending email : ',err)
    }else{
        console.log('Email sent successfully')
    }
})