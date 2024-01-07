import React from "react";
import "./Login.css";
import LoginBg from './bg.jpg'
function Login() {
  return (
    <div className="login_section" style={{backgroundImage : `url(${LoginBg})`,
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover"
}}>
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
    </div>
  );
}

export default Login;
