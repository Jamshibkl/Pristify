import {React, useState} from 'react'

import '../Login/Login.css'
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Register() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  return (
    <div className="login-container">
        <div className="login wrap">
      <div className="h1">Register Here</div>
      <input type="text" name="name" placeholder='FirstName' />
      <input type="text" name="name" placeholder='SecondName' />

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
            type={type}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="password"
          />
          <span
            className="pass-icon"
            onClick={handleToggle}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}>
            <Icon
              class="absolute mr-10"
              icon={icon}
              size={25}
              style={{
                position: "absolute",
                margin: "10px 20px",
                cursor: "pointer",
                opacity: ".5",
              }}
            />
          </span>
      <input value="Signup" className="btn" type="submit" />
      <input value="Signup with google" className="btn" type="submit" style={{background:"#ffffff"}} />
      <div className="login-para">
            <p style={{textDecoration:"none"}}>
              already have account? <Link to="/login"> <span>Login here</span> </Link>
            </p>
          </div>
    </div>
    </div>
);
}

export default Register
