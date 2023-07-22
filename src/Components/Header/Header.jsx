import React, {  useEffect, useState } from 'react'
import { NavLink, Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Fitness from "./Fitness";
import Food from "./Food";
import Technology from "./Technology";
import Hollywood from "./Hollywood";
import Details from '../details/Details';
import { GiHamburgerMenu } from 'react-icons/gi';
import SignUp from '../Authorization/SignUp';
import { Login } from "../Authorization/Login"
//import LogOut from '../Authorization/LogOut';




function Header() {
  const nav = useNavigate();
  const [loginUser, setLoginUser] = useState(true);
 
  

  

  useEffect(() => {
    let token=localStorage.getItem("token")
    if (token==null) {
      setLoginUser(true)
    }
    else if(token) {
      setLoginUser(false)
    }
    else{
      return null;
    }
  },[]);

    

  const LogOut = () => {
    setLoginUser(true)
    nav("/")
    localStorage.removeItem('token');
  }

 
  return (
    <div className="App">
      <h3>The</h3>
      <Link to="/"><p>Siren</p></Link>
      {
        !loginUser ?
          <>
           <Link  id='link'> <h4 className='logOut_button' onClick={LogOut}>LogOut</h4></Link>
        
          </>
          :
          <>
              <Link to="/login" id='link'> <h5 className='login_button'>Login</h5></Link>
              <Link to="/signUp" id='link'><h5 className='signUp_button'>SignUp</h5></Link>
           
          </>
      }
     
      <input type="checkbox" id="menu-bar" />
      <label htmlFor="menu-bar" className='label'><GiHamburgerMenu /></label>
      <div className="links">
        <NavLink to="/" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Home
        </NavLink>
        <NavLink to="/bollywood" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Bollywood
        </NavLink>
        <NavLink to="/technology" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Technology
        </NavLink>
        <NavLink to="/hollywood" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Hollywood
        </NavLink>
        <NavLink to="/fitness" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Fitness
        </NavLink>
        <NavLink to="/food" className="NavLink" style={({ isActive }) => ({
          color: isActive ? 'grey' : 'black', textDecoration: 'none'
        })}>
          Food
        </NavLink>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/food" element={<Food />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/signUp" element={<SignUp />} />

        {
          !loginUser
            ?
            <Route path="/details/:id" element={<Details />} />
            :
            null
        }
      </Routes>
      
    </div>
  );
}

export default Header;
