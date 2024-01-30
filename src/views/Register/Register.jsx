import React from 'react'
import './Register.css'
import avatar from './Welcome-cuate.svg'
import Header from '../../components/Header/Header';
function Register() {
  return (
    
    <div className="login_section" style={{background:"#222222"
}}>
    {/* <Header /> */}
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
        type="password"
      />
      <input value="Signup" className="btn" type="submit" />
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

export default Register
