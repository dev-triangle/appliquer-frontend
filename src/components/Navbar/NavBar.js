import React from 'react'
import './NavBar.css'
import {useGlobalContext} from '../../Context'
import Logout from '../Logout/Logout'

function NavBar() {
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
          <div class="logo">
            <h1 className='nav__title'>Appliquer</h1>
          </div>
          <div class="menu-items">
            <li ><a href="/home">Home</a></li>
            <li><a href="#">Dashboard</a></li>
           
            <li><a onClick={<Logout/>} href="\login">{ loggedin==true ? "logout":""}</a></li>
            
          </div>
        </div>
      </div>
    </nav>
  </body>


  )
}

export default NavBar