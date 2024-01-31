import React ,{ useEffect,useState}from 'react'
import { Link ,useLocation} from 'react-router-dom'
import image from "./shareThought2.jpg"

export default function Feed() {
  const location = useLocation();
  const {state:{id}}=location
  // let id =location.state && location.state.data
  console.log("this is feed"+id)
  useEffect(()=>{
    console.log('Recieved props',id)
  },[id])
id=JSON.stringify(id)
id=JSON.parse(id)
  console.log("this is feed "+id)
  const [fullname,setfullname]=useState('')
  // calling function for the user name
  const userName=async()=>{
   let nameUser
   try{
     const response=await fetch('http://localhost:5000/userName',{
       method:'POST',
       headers:{'Content-Type':'application/json',
     },
     body:JSON.stringify({id}),
   })
   console.log("this is account created ")
   if(response.ok)
   {
     let a=await response.json()
      nameUser=a.data.fullname
      setfullname(nameUser)
     console.log("yaayy..we got the user name"+nameUser+"--"+typeof(nameUser))
   }else{
     console.log("Some error occured in getting the user name")
   }
  }catch(err){
   console.error(err)
  }
 }
 userName()
  return (
    <div >
      <img src={image} alt='background-image' className='image2'/>
      <h2>Hello</h2>
      <h1>{fullname}</h1>
      <div id='feeds'>
        <div className='tabs-post'>
         <div className='sepTab'><Link to={{pathname:'/feed'}} className="linkStyle">All Post</Link></div>
         <div className='sepTab'><Link to={{pathname:'/feed'}} className="linkStyle">Commented Post</Link></div>
         <div className='sepTab'><Link to={{pathname:'/feed'}} className="linkStyle">Replied Post</Link></div>
         <br></br>
         <div className='sepTab' id='createpost'><Link to={{pathname:'createPost'}} className="linkStyle">Create Post + </Link></div>
        </div>
        <div className=' post'>
           All Posts
          {/* get data from .json file and show posts here  on Click you can read full post with comments*/}
        </div>
      </div>
    </div>
  )
}
  
