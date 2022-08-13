import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import './Dashboard.css'

function Dashboard() {
  return (
    <div>
    <NavBar/>
    <div className='dashboard_container'>
     <div className='profile_sidebar'></div>
    </div>
    </div>
  )
}

export default Dashboard