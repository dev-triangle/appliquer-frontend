import React from 'react'
import './NavBar.css'
import {useGlobalContext} from '../../Context'
import axiosInstance from '../../axios'
import {useNavigate} from 'react-router-dom'


function NavBar() {
const navigate=useNavigate();
const Logout=()=>{
	const response = axiosInstance.post('api/token/blacklist/', {
    refresh_token: localStorage.getItem('refresh_token'),
  });
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  axiosInstance.defaults.headers['Authorization'] = null;
  console.log("user logged out")
      
};

  const {loggedin, setLoggedin}=useGlobalContext()
  return (
    <body>
    <nav>
      <div class="navbar">
        <div class="navcontainer nav-container">

        
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>

            <div className='title_login'>

          <div className='name__login__container'>
          <div class="logo">
            <h1 className='nav__title'>Appliquer</h1>
          </div>
         {
            (loggedin===false)?
         ( (<div className='glow-on-hover' onClick={()=> navigate('/login') } >Login
          </div>)):
          ((null))
        }
          </div>

          </div>
          

          <div class="menu-items">
            <li ><a href="/home">Home</a></li>
            <li><a href="#">Dashboard</a></li>
           
            <li><a onClick={()=>{if(loggedin==true)Logout()}} href="\login">{ loggedin==true ? "logout":""}</a></li>
            <li><a href="/dashboard"</li>
            
          </div>
        </div>
      </div>
    </nav>
  </body>


  )
}

export default NavBar