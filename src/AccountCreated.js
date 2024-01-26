import React, { useEffect, useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'

export default function AccountCreated() {
  const location = useLocation();
  const {state:{info}}=location
  useEffect(()=>{
    console.log('Recieved props',info)
  },[info])
  let data=JSON.stringify(info)
  console.log("this is accountl"+data)
  return (
    <div>
      <div className='g-3 col-md-6 box'>
        <h1>Account Created successfully</h1>
        <br></br>
        <button className='btn btn-primary'><Link to={{pathname:'/feed'}} className="linkStyle">Create Your First Post</Link></button>
      </div>
    </div>
  )
} 
