import React from 'react'
import axios from 'axios'
import baseUrl from '../../utils/urls'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'


import '../Login/Loginsignup.css'
import axiosInstance from '../../axios'

function Signup() {
    const navigate = useNavigate()
  
    const[email, setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const handlesubmit = async(e)=>{
        e.preventDefault()
       await axios.post(`${baseUrl}/register/`,{
            "email" : email,
            "username":username,
            "password":password
        }).then((Response)=>{
            console.log(Response)
            if(Response.status===201){
              
              navigate('/login')
            }
      
       
       })
    }


  return (
    <div className='login1_container'>
    <section className='login_section'>
        <div class="color"></div>
        <div class="color"></div>
        <div class="color"></div>
        <div class="login_box">
        <div class="square" style={{'--i':0}}></div>
        <div class="square" style={{'--i':1}}></div>
        <div class="square" style={{'--i':2}}></div>
        <div class="square" style={{'--i':3}}></div>
        <div class="square" style={{'--i':4}}></div>
            </div>
            <div className="login_container">
            <div class="login_form">
                <h2>SignUp Form</h2>
                <form onSubmit={handlesubmit}>
                <div class="login_inputBox">
                        <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div class="login_inputBox">
                        <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div class="login_inputBox">
                        <input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div class="login_inputBox">
                        <input type="submit" value="SignUp"/>
                    </div>
                    
                </form>
            </div>
        </div>
    </section>
   
    </div>
  )
}

export default Signup