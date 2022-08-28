import { useFormik } from 'formik'
import React, {  useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



function Login() {
    const params=useParams()
    const navigate= useNavigate()
    const [userData, setUserData]=useState({})
    const formik = useFormik({
        initialValues:{
         
          username:"",
          password:"",
         
        },
        validate:(values)=>{
          let error ={};
         
    
         if(values.username===""){
            error.username="*Kindly enter your Username"
          }
          if(values.password===""){
            error.password="*Kindly enter your password"
          }
          
          
          return error
        },
        onSubmit : async(values)=>{
        let result = await axios.get("https://630a16213249910032803b78.mockapi.io/todo")
        let person = result.data.find(user=>user.username === values.username)
      if(result.data.find(user => (user.username === values.username && user.password === values.password)))
      {
          navigate(`/main/${person.id}`)
      }else{
          alert("Wrong Credential")
      }

      }
    })
     
    
    //   useEffect(()=>{
    //     let data=async()=>{
    //         let result= await axios.get("https://630a16213249910032803b78.mockapi.io/todo")
    //         console.log(result.data)
    //         return data
    //     }
    //   })




      let home =()=>{
       
        navigate("/")
      }

  return (
    <div className='container'><h1>login</h1>
    <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        
        <div className='col-lg-6'>
          <label>Username</label>
          <input className="form-control" type={"text"}
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"></input>
          <span style={{color:"red"}}>{formik.errors.username}</span>
        </div>
        <div className='col-lg-6'>
          <label>Password</label>
          <input className='form-control' type={"password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"></input>
          <span style={{color:"red"}}>{formik.errors.password}</span>
        </div>
        
        </div>
        <div className='col-lg-6'>
          
          <input className='btn btn-primary mt-2' type={"submit"} disabled={!formik.isValid} value="submit"></input>
        </div>
        <div className='col-lg-6'>
          
         <button onClick={home}>Home</button>
        </div>
        
    </form>
    </div>
  )
}

export default Login