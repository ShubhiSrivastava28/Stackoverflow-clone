import React from 'react'
import './LeftSidebar.css'
import {NavLink} from 'react-router-dom'
import Globe from "../../assets/Globe.svg";
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
       <nav className='side-nav'>
       <NavLink to="/" className="side-nav-links" activeclassname="active">
        <p>Home</p>
       </NavLink>
       <div className='side-nav-div'>
         <div> <p>PUBLIC</p></div>
         <NavLink to='/Questions' className="side-nav-links" activeclassname="active" style={{paddingLeft:"40px"}}>
          <img src={Globe} alt="Globe"/>
          <p style={{paddingLeft:"10px"}}>Questions</p>
         </NavLink>
         <NavLink to='/Tags' className="side-nav-links" activeclassname="active">
        <p>Tags</p>
         </NavLink>
         <NavLink to='/Tags' className="side-nav-links" activeclassname="active">
           <p>Users</p>
         </NavLink>
       </div>
       </nav>
    </div>
  )
}

export default LeftSidebar
