import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Loginsignup.css'
import axios from 'axios';
import axiosInstance from '../../axios';
import {useGlobalContext} from '../../Context'

function Login() {
    const {loggedin,setLoggedin} =useGlobalContext()
   
    const navigate=useNavigate();

    const[email, setEmail]=useState("");
    
    const[password,setPassword]=useState("");

    const handleLogin=(e)=>{
        e.preventDefault();
        axiosInstance.post(`http://127.0.0.1:8000/api/token/`,{
            "email": email,
            "password" : password
        }).then((res)=>{
            console.log(res)
            localStorage.setItem('access_token',res.data.access);
            localStorage.setItem('refresh_token',res.data.refresh);
            axiosInstance.defaults.headers['Authorization']= 'Bearer ' + localStorage.getItem('access_token');
        
        }).then(()=>
        { setLoggedin(true)
        navigate('/home')}).then(()=>{
            axiosInstance.get(`http://127.0.0.1:8000/current-user/`).then((res)=>{
                
                console.log(res.data.id)
                localStorage.setItem('user-id',res.data.id)
            }).catch(error=>console.log(error))
        })
        .catch(error=>console.log(error))
        
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
                <h2>Login Form</h2>
                <form onSubmit={handleLogin}>
                    <div class="login_inputBox">
                        <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div class="login_inputBox">
                        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div class="login_inputBox">
                        <input type="submit" value="Login"/>
                    </div>
                    <p class="forget">Forgot Password ? <a className='ah' href='#'>Click Here</a></p>
                    <p class="forget">Don't have an account ? <a className='ah' href="/signup">Sign Up</a></p>
                </form>
            </div>
        </div>
    </section>
   
    </div>
    
  )
}

export default Login

