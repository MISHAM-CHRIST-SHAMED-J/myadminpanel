import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Register() {
  const navigate= useNavigate()
  const formik=useFormik({
    initialValues:{
      name:"",
      username:"",
      password:"",
      password1:"",
    },
    validate:(values)=>{
      let error ={};
      if(values.name===""){
        error.name="*Please enter your name"
      }

     if(values.username===""){
        error.username="*Please enter your Username"
      }
      if(values.password===""){
        error.password="*Please enter your password"
      }
      else if(values.password1 !== values.password){
        error.password1="*Password not Match "
      }
      
      return error
    },
    onSubmit : async(values)=>{
    await axios.post("https://630a16213249910032803b78.mockapi.io/todo",values)
    console.log(values)
     alert("Registered successfully")
     navigate("/")
    }
  })
  let home =()=>{
    navigate("/")
  }
  return (
   <div className='container'>
    <form onSubmit={formik.handleSubmit}>
      <div className='row'>
        <div className='col-lg-6'>
          <label>Name</label>
          <input className='form-control' type={"text"}
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          ></input>
          <span style={{color:"red"}}>{formik.errors.name}</span>
        </div>
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
        <div className='col-lg-6'>
          <label>Confirm Password</label>
          <input className="form-control" type={"password"}
          value={formik.values.password1}
          onChange={formik.handleChange}
          name="password1"></input>
          <span style={{color:"red"}}>{formik.errors.password1}</span>
        </div>
        </div>
        <div className='col-lg-6'>
          
          <input className='btn btn-primary mt-2' type={"submit"} disabled={!formik.isValid} value="submit"></input>
        </div>
        <div className='col-lg-6'>
          
          <button className='btn btn-primary mt-2' onClick={home}>Home</button>
        </div>
        
    </form>
    </div>
  )
}

export default Register;