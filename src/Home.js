import React from 'react'
import { Link } from 'react-router-dom'
import image from "./shareThought.jpg"
export default function Home() {
  return (
    <div>
      <img src={image} alt='background-image'/>
      <div id='d'>
      <div >
      <h2>Hii..Start Posting ANONYMOUSLY where NO One is judging </h2><br></br>
      <center><button className='btn btn-primary submitText'><Link to='/registration' className="linkStyle">Create an Account</Link></button></center>
      <br></br><br></br>
      <center><h3>Already have an Account</h3></center>
      {/* <br></br> */}
      <center><button  className='btn btn-primary submitText'><Link to='/login' className="linkStyle">Login</Link></button></center>
      </div>
      </div>
    </div>
  ) 
} 
 
