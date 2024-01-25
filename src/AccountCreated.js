import React from 'react'
import { Link } from 'react-router-dom'

export default function AccountCreated() {
  return (
    <div>
      <div className='g-3 col-md-6 box'>
        <h1>Account Created successfully</h1>
        <br></br>
        <button className='btn btn-primary'><Link to={{pathname:'/feed'}}>Create Your First Post</Link></button>
      </div>
    </div>
  )
}