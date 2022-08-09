import React from 'react'

import '../Login/Loginsignup.css'

function Login() {
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
                <form>
                    <div class="login_inputBox">
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div class="login_inputBox">
                        <input type="password" placeholder="Password"/>
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

