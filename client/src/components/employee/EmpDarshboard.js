// import React from "react";

// //css
// import "../../assets/css/EmpDashboard.css";

// const EmpDashBoard = () => {
//   return (
//     <div className="emp-dashboard">
//       <a href="/login/emp/uh">
//         <button>UPDATE HEALTH</button>
//       </a>
//       <a href="/login/emp/ub">
//         <button>UPDATE BLOOD STOCK</button>
//       </a>
//       <a href="/login/emp/hr">
//         <button>HANDLE REQUEST</button>
//       </a>
//       <a href="/login/emp/dr">
//         <button>HANDLE DONATION</button>
//       </a>
//     </div>
//   );
// };

// export default EmpDashBoard;



import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//css
import "../../assets/css/EmpDashboard.css";
//import DonationRequests from "./DonationRequests";



const EmpDashBoard = () => {
  return (
    <div className="emp-dashboard">
      <a href="/login/emp/uh">
        <button>UPDATE HEALTH</button>
      </a>
      <a href="/login/emp/ub">
        <button>UPDATE BLOOD STOCK</button>
      </a>
      <a href="/login/emp/hr">
        <button>HANDLE REQUEST</button>
      </a>
      <a href="/login/emp/dr">
        <button>HANDLE DONATION</button>
      </a>
    </div>
    
  
  );
};

export default EmpDashBoard;
