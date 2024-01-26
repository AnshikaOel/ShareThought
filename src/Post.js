import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Post() {
    const [post,updatePost]=useState("")
  return (
    <div>
      <div>
      <div><Link to={{pathname:'/feed'}}>All Post</Link></div>
        <div><Link to={{pathname:'/feed'}}>Commented Post</Link></div>
        <div><Link to={{pathname:'/feed'}}>Replied Post</Link></div>
        <br></br>
        <div><Link to={{pathname:'/feed'}}>Create Post</Link></div>
      </div>
      <div>
      <h1>Create Post</h1>
      <input type='text' placeholder='Post Title'></input>
      <h1></h1>
      <textarea id ="post" placeholder='Describe your Post'rows={20} cols={70} onChange={(e)=>updatePost(e.target.value)}></textarea>
      <br></br>
      <button className='btn btn-primary'>Post</button>
      </div>
    </div>
  )
}
 
