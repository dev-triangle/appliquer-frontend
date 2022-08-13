import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
        <div className='dashboard__container'>
            <div className=""><img className='profileIcon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZQ-vYtz1gSxWB3QvtAU5sQ3ARMfwQpi-tJcIfumC4&s" alt="" srcset="" />
            </div>
           
           {/* basic info */}
            <div className="dash__child">
                <div className="dashcard__first">
                <div><p>Username</p></div>
                <div><p>Name</p></div>
                <div><p>mail</p></div>
                <div><p>dob</p></div>
                </div>
                <div className="dashcard__second">
                    <div> <p>github</p></div>
                    <div><p>Linkedin</p></div>
                </div>
            </div>
        {/* projects */}
        <h1 className='child__title'>Projects</h1>
            <div className="dash__child">
            <ul>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                </ul>
            </div>

            {/* experience */}
            <h1 className='child__title'>Experience</h1>
            <div className="dash__child">
                <ul>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                </ul>
            </div>

            {/* description */}
            <h1 className='child__title'>Description</h1>
            <div className="dash__child">
                
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
           

        </div>
    </div>
  )
}

export default Dashboard