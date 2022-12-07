import React, { useEffect, useRef } from 'react'
import "./login.css"

const Login = () => {
    const inpRef = useRef(null)

    useEffect(() => {
        inpRef.current.focus()
    })



  return (
    <div className='login-container'>
        <div className='login-image-container'>
            <img src="./login.jpg" alt="Login-image"/>
        </div>

        <div className='login-form-container'>
            <h1>Greetings to <span className='kct'>KCT</span> Portal</h1>
            <input class="form-control input-username" type='text' placeholder="username" ref={inpRef} />
            <input class="form-control input-password" type='password' placeholder = "password" onChan/>
            <div className='btn-container'>
            <button type="button" class="btn btn-primary btn-login">LOGIN</button>
            <button type="button" class="btn btn-primary btn-signup">SIGN UP</button>
            </div>
            <p className='forgot-password'><a href="#">Forgot password?</a></p>
        </div>

    </div>
  )
}

export default Login