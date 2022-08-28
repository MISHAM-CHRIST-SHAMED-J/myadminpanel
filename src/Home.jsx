import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate=useNavigate()
let login=()=>{
    navigate("/login")
}

let register =()=>{
    navigate("/register")
}

  return (
    <div>Welcome to home <br />
        <button onClick={login}>Login</button>
        <button onClick={register}>Register</button>
    </div>
  )
}

export default Home