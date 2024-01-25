import React from 'react'
import { Link } from 'react-router-dom'

export default function feed() {
  return (
    <div className='tabs-post'>
      <div className='tabs g-3'>
        <div className='sepTab'><Link to={{pathname:'/feed'}}>All Post</Link></div>
        <div className='sepTab'><Link to={{pathname:'/feed'}}>Commented Post</Link></div>
        <div className='sepTab'><Link to={{pathname:'/feed'}}>Replied Post</Link></div>
      </div>
      <div className='post g-3'>
        All Posts
        {/* get data from .json file and show posts here  on Click you can read full post with comments*/}
      </div>
    </div>
  )
}
 