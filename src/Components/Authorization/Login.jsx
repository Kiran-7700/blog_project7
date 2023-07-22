import { useState } from "react";
import React from 'react';
import axios from "axios";
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';

export function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const nav=useNavigate()

  async function submit(){
    try{
      const response = await axios.post("https://project7-backend.onrender.com/students/login",{
        email,password
      })
      const data = response.data;
      console.log(data);
      console.log(data.message);
      console.log(data.loginToken);
      localStorage.setItem('token',data.loginToken);
      alert(" login successfully")
       window.location.reload(true)
       nav("/")
     
    }
    catch(error){
      console.log(error);
      nav("/")
    }
   
}


  return (
    <>
    <Link to="/"><div className="back_button">Back</div></Link> 
    <div className='main'>
      <div className="login_form_container">
        <div className="login_form">
          <h2>Login</h2>
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username / Email"
              className="input_text"
              autoComplete="off"
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder="Password"
              className="input_text"
              autoComplete="off"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button_group" id="login_button">
          <button onClick={submit} >Submit</button>
          </div>
          <div className="footer1">
            <h6 className="change_path">Don't have an account ?</h6>
            <Link to="/signUp" className='link'>SignUp</Link>
          </div>
        </div>
      </div>
    </div>

    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
    </footer>
    </>
  )
}




export default {Login};

