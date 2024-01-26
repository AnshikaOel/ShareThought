import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className=' g-3 col-md-6 box '>
      <h1>Start Posting ANONYMOUSLY where NO One is judging </h1><br></br>
      <center>
      <button  className='btn btn-primary submitText'><Link to='/registration' className="linkStyle">Create Account</Link></button>
      
      <br></br><br></br>
      Already have a Account
      <br></br>
      <button  className='btn btn-primary submitText'><Link to='/login' className="linkStyle">Login</Link></button>
      </center>
      </div>
    </div>
  )
} 
 
