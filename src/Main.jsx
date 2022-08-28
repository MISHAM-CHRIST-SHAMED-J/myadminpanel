import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Main() {
    const navigate=useNavigate()
    const params=useParams()
    const [user,setUser]=useState({})
  let home=()=>{
    navigate("/")
  }
  useEffect(()=>{
    loadUser()
  },[])
  
  let loadUser = async()=>{
    try{
     let user = await axios.get(`https://630a16213249910032803b78.mockapi.io/todo/${params.id}`)
     console.log(user.data)
     setUser(user.data)
     
    }
    catch(error){
      alert(error.message)
    }
  }



  return (
    <div>
      <h1>Hello {user.name}</h1>
    <br />
    <div><img src={user.image} className='img1' /></div>
    <br />
    <button onClick={home}>Logout</button>
    </div>
    
  )
}

export default Main