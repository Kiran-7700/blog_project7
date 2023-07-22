import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav=useNavigate()


  async function submit() {
    try {
      const response = await axios.post("https://project7-backend.onrender.com/students/signUp", {
        name, phone, email, password
      })
      console.log(response.data);
      alert("Resister successfully")
      
    }
    catch (error) {
      console.log(error);
    }
    nav("/login")
  }

  return (
    <>
    <Link to="/"><div className="back_button">Back</div></Link>
    <div className='main'>
      <div className="login_form_container">
        <div className="login_form">
          <h2>Sign Up</h2>
          <div className="input_group">
            <i className="fa fa-user"></i>
            <input
              type="text"
              placeholder="Username"
              className="input_text"
              autoComplete="off"
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="text"
              placeholder="Email"
              className="input_text"
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="number"
              placeholder="Phone number"
              className="input_text"
              autoComplete='off'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="input_group">
            <i className="fa fa-unlock-alt"></i>
            <input
              type="password"
              placeholder=" Password"
              className="input_text"
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="button_group" id="login_button">
            <button onClick={submit}>Sign Up</button>
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
  	 				<li>about us</li>
  	 				<li>our services</li>
  	 				<li>privacy policy</li>
  	 				<li>affiliate program</li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li>FAQ</li>
  	 				<li>shipping</li>
  	 				<li>returns</li>
  	 				<li>order status</li>
  	 				<li>payment options</li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li>watch</li>
  	 				<li>bag</li>
  	 				<li>shoes</li>
  	 				<li>dress</li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<i class="fab fa-facebook-f"></i>
  	 				<i class="fab fa-twitter"></i>
  	 				<i class="fab fa-instagram"></i>
  	 				<i class="fab fa-linkedin-in"></i>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

    </>
  )
}

export default SignUp;