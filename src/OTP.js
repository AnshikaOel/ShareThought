import React from 'react'
import { Link } from 'react-router-dom';

export default function OTP() {
  return (
    <div>
      <div className=' g-3 col-md-6 box ' >
      <label for="otp"><h1>Enter the OTP send on Your Email</h1></label>
      <input type='number' minLength={1} maxLength={1} className='otpbox'></input>
      <input type='number' minLength={1} maxLength={1} className='otpbox'></input>
      <input type='number' minLength={1} maxLength={1} className='otpbox'></input>
      <input type='number' minLength={1} maxLength={1} className='otpbox'></input>
      <br></br>
      <button type='submit' className='btn btn-primary submitText' ><Link to={{pathname:'/AccountCreated'}}>Continue</Link></button>
      </div>
      
    </div>
  )
} 