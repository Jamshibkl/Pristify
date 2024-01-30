import React from "react";
import "./Login.css";
import avatar from './Login-bro.svg'
import Header from "../../components/Header/Header";
function Login() {
  return (
  
    <div className="login_section" style={{background:"#222222"
}}>
    <Header />
        <div className="login wrap">
      <div className="h1">Login</div>
      <input
        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
        placeholder="Email"
        id="email"
        name="email"
        type="text"
      />
      <input
        placeholder="Password"
        id="password"
        name="password"
        type="password"
      />
      <input value="Login" className="btn" type="submit" />
    </div>
    <div className="avatar">
      <img src={avatar} alt="avatar"/>
      <p style={{color :"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, 
        nam eius molestias <br></br>aperiam sunt repellat itaque officiis dolorem earum quisquam.Lorem ipsum dolor, sit amet 
        <br />consectetur adipisicing elit. Ea, praesentium.</p>
    </div>
    </div>
  );
}

export default Login;
