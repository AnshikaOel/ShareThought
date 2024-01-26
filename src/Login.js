import React from 'react'
import { useState } from 'react'
import image from "./background.jpg"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Login() { 

  const [id,idUpdate]=useState('')
  const [password,passwordUpdate]=useState('')

  const ProceedLogin=(e)=>{
    e.preventDefault()
    if(validate())
    {
      console.log('procedd')
      fetch("http://localhost:5000/userInfo"+id).then((res)=>{
        console.log(res)
        return res.json()
      }).then((resp)=>{
        console.log(resp)
      }).catch((err)=>{
        toast.error('Login Failed due to : '+err.message)
      })
    }
  }

  const validate=()=>{
    let result=true;
    if(id==='' || id===null){
      result=false
      toast.warning('Please enter a Email Id')
    }
    if(password==='' || password===null){
      result=false
      toast.warning('Please Enter a valid Password')
    }
    return result
  }

  return (
    <div >
      <img src={image} alt='background-image'/>
      <div id='d'>
        <form action="/submit" method="post"onSubmit={ProceedLogin} className="row g-3">
            <div>
              <h2>User Login</h2>
            </div>
            <div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type='text' className="form-control"  value={id} onChange={e=>idUpdate(e.target.value)}></input>
              </div>
              <div className="col-md-6">
                <label className="form-label">Password</label>
                <input type='password' className="form-control"  value={password} onChange={e=>passwordUpdate(e.target.value)}></input>
              </div>
            </div>
            <div className="col-md-6">
              <button type='submit' className='btn btn-primary'>Submit</button>
              <button type='submit' className='btn btn-primary'><Link className="linkStyle"to={'/registration'}>New User</Link></button>
            </div>
        </form>
      </div>
    </div>
  )
}
