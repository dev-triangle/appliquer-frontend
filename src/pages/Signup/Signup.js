import React from 'react'


import '../Login/Loginsignup.css'

function Signup() {
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
                <form>
                <div class="login_inputBox">
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div class="login_inputBox">
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div class="login_inputBox">
                        <input type="password" placeholder="Password"/>
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