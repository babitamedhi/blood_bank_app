import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import UserRegister from "../user/userRegister";
import UserLogin from "../user/userLogin";
import Background from "../layout/Background";


//css
import "../../assets/css/Donate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const backgroundImageUrl = "../../assets/img/bg2.png"; // specify your background image path
const googleFormLink = "https://docs.google.com/forms/d/1FVXl3RSLMNSLsg9t6Fsw1ucPkKiwX1nSdr3EWvl1sMQ/edit"; // Updated Google Form link

const Donate = () => {
  return (

    
    <div className="donate">
   
      {/* <Link to="/reg/usr">
        <button className="register">REGISTER</button>
      </Link>
      <Link to="/login/usr">
        <button className="login">LOGIN</button>
      </Link>

      <Routes>
        <Route path="/reg/usr" component={UserRegister} />
        <Route path="/login/usr" component={UserLogin} />
      </Routes> */}

      <div className="dash-container">

      </div>
      
      <Link to="/login/usr">
        <button className="login">LOGIN</button>
      </Link>
      <Link to="/reg/usr">
        <button className="register">REGISTER</button>
      </Link>
     
      <Routes>
        
        <Route path="/login/usr" component={UserLogin} />
        <Route path="/reg/usr" component={UserRegister} />
      </Routes>
      <Background imageUrl={backgroundImageUrl} >
       
        <h1 style={{ textAlign: 'center', color: 'rgb(164, 50, 50)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    ':hover': {
      transform: 'scale(1.1)',
      
    }, }}>Blood Unity</h1>
        <p style={{ textAlign: 'center', color: 'rgb(64, 7, 7)', marginRight: '50px', marginLeft:'50px' }}>Welcome folks, we are a blood bank management system providing all the blood donors and recipients an efficient and reliable platform  </p>
        <h6 style={{ textAlign: 'center', fontWeight: 'normal', color: 'gray', margin: '2px' }}>
            Contact Us
        </h6>
        <h6 style={{ textAlign: 'center', fontWeight: 'normal', color: 'gray', marginTop: '5px' }}>
        <a href="mailto:ritishadeka120102@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
           <FontAwesomeIcon icon={faEnvelope} />
        </a>
        
      </h6>
      <h6 style={{ textAlign: 'center', fontWeight: 'normal', color: 'gray', margin: '2px' }}>
           Share your suggestions here
        </h6>
        <h6 style={{ textAlign: 'center', fontWeight: 'normal', color: 'gray', margin: '4px'  }}>
          <a href={googleFormLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faFileAlt} /> Fill Google Form
          </a>
        </h6>
        
    
      
      </Background>
      
    </div>
    
   

  
    
  );


};

    

export default Donate;
