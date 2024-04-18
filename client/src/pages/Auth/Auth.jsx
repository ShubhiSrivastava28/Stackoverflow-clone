import React, { useState } from 'react'
import './Auth.css'
import icon from '../../assets/icon.png'
import AboutAuth from "./AboutAuth";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleSwitch = () => {
    setIsSignup(!isSignup)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section class='auth-section'>
      {
        isSignup && <AboutAuth/>
      }
       <div class='auth-container-2'>
        { !isSignup && <img src={icon} alt='stack overflow' className='login-logo'/> }
         <form onSubmit={handleSubmit}>
              {
                 isSignup && (
                  <label htmlFor='name'>
                      <h4>Display Name</h4>
                      <input type="text" id="name" name='name' onChange={(e) => {
                  setName(e.target.value);
                }} />
                  </label>
                 )

              }

         <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" name='email' id='email' onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
            </label>
  
            <label htmlFor="password">
              <div style={{display:"flex", justifyContent:"space-between"}}>
              <h4>Password</h4>
              { !isSignup && <p style={{color: "#007ac6", fontSize:"13px"}}>Forgot password?</p>}
              </div>
            <input type="password" name='password"' id='password"'onChange={(e) => {
                  setPassword(e.target.value);
                }}/>
            { isSignup && <p style={{color: "#666767", fontSize:"13px"}}>Password must contain at least eight <br/> characters,including atleast 1 letter and 1 <br/>number.</p>}
         </label>
         {
          isSignup && (
            <label htmlFor='check'>
             <input type="checkbox" id="check" />
             <p style={{color: "#666767", fontSize:"13px", margin:"10px"}}>Opt-in to receive occassional, <br/> product updates, user researc imvitations,<br/> company announcements, and objects</p>
            </label>
          )
         }
         <button type='submit' className='auth-btn'>{ isSignup ? 'Sign up': 'Log in'}</button>
         {
          isSignup && (
            <p style={{color: "#666767", fontSize:"13px"}}>
              By clicking "Sign up", you agree to our 
             <span style={{color: "#007ac6"}}> terms of <br/> services</span>, 
             <span style={{color: "#007ac6"}}> privacy, policy </span>and 
             <span style={{color: "#007ac6"}}> cookie policy.</span>
            </p>
          )
         }
         </form>
        <p>
          {isSignup ? 'already have an account?' : "Don't have an account?"}
          <button type='button' className='handle-switch-btn' onClick={handleSwitch}>{ isSignup ? "Log in" : 'sign up'}</button>
        </p>

       </div>
    </section>
  )
}

export default Auth