import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import UserRegister from "../user/userRegister";
import UserLogin from "../user/userLogin";

//css
import "../../assets/css/Donate.css";

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

    
    </div>
  
    
  );

};

export default Donate;
