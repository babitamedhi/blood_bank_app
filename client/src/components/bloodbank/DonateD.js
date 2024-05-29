// // import React, { useEffect, useState } from "react";
// // import Axios from "axios";

// // import "../../assets/css/Donate.css";

// // const Donate = () => {
// //   //variables
// //   const [bloodTable, setBloodTable] = useState([]);
// //   const [bloodGroup, setBloodGroup] = useState("");
// //  // const [requestUnit, setRequestUnit] = useState(0);
// //   const [message, setMessage] = useState("");

// //   //useEffect call
// //   useEffect(() => {
// //     Axios.get("http://localhost:3001/home").then((response) => {
// //       setBloodTable(response.data);
// //     });
// //   }, []);

// //   const donateBlood = (e) => {
// //     e.preventDefault();
// //     Axios.post("http://localhost:3001/donate", {
// //       blood_group: bloodGroup
// //       //unit: requestUnit,
// //     }).then((response) => {
// //       setMessage(response.data.message);
// //     }).catch((error) => {
// //       setMessage("INSUFFICIENT STOCKS!");
// //     });
// //   };

// //   return (
// //     <div className="donate">
// //       <h3>DONATE BLOOD</h3>
// //       <table className="blood-table">
// //         <thead>
// //           <tr>
// //             <th>Blood Group</th>
            
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {bloodTable.map((val) => (
// //             <tr key={val.b_id}>
// //               <td>{val.blood_group}</td>
              
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //       <form onSubmit={donateBlood}>
// //         <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
// //           <option value="A+ve">A+ve</option>
// //           <option value="A-ve">A-ve</option>
// //           <option value="B+ve">B+ve</option>
// //           <option value="B-ve">B-ve</option>
// //           <option value="AB+ve">AB+ve</option>
// //           <option value="AB-ve">AB-ve</option>
// //           <option value="O+ve">O+ve</option>
// //           <option value="O-ve">O-ve</option>
// //           <option value="PNull">P Null</option>
// //         </select>
        
// //         <button type="submit">DONATE</button>
// //       </form>
// //       {message && <p>{message}</p>}
// //     </div>
// //   );
// // };

// // export default Donate;





// import React, { useEffect, useState } from "react";
// import Axios from "axios";

// import "../../assets/css/Donate.css";

// const Donate = () => {
//   const [bloodTable, setBloodTable] = useState([]);
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     Axios.get("http://localhost:3001/home").then((response) => {
//       setBloodTable(response.data);
//     });
//   }, []);

//   const donateBlood = (e) => {
//     e.preventDefault();
//     Axios.post("http://localhost:3001/donate", {
//       blood_group: bloodGroup,
//       user_id: 1 // Replace with the actual user_id
//     }).then((response) => {
//       setMessage(response.data.message);
//     }).catch((error) => {
//       setMessage("Error donating blood");
//     });
//   };

//   return (
//     <div className="donate">
//       <h3>DONATE BLOOD</h3>
//       <table className="blood-table">
//         <thead>
//           <tr>
//             <th>Blood Group</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bloodTable.map((val) => (
//             <tr key={val.b_id}>
//               <td>{val.blood_group}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <form onSubmit={donateBlood}>
//         <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
//           <option value="A+ve">A+ve</option>
//           <option value="A-ve">A-ve</option>
//           <option value="B+ve">B+ve</option>
//           <option value="B-ve">B-ve</option>
//           <option value="AB+ve">AB+ve</option>
//           <option value="AB-ve">AB-ve</option>
//           <option value="O+ve">O+ve</option>
//           <option value="O-ve">O-ve</option>
//           <option value="PNull">P Null</option>
//         </select>
//         <button type="submit">DONATE</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Donate;

import React, { useState } from "react";
import Axios from "axios";

import "../../assets/css/Donate.css";

const Donate = () => {
  const [bloodGroup, setBloodGroup] = useState("");
  const [message, setMessage] = useState("");
  const userId = /* logic to get userId, e.g., from auth context or state */;

  const donateBlood = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/donate", {
      blood_group: bloodGroup,
      user_id: userId
    }).then((response) => {
      setMessage(response.data.message);
    }).catch((error) => {
      setMessage("Error while processing your request.");
    });
  };

  return (
    <div className="donate">
      <h3>DONATE BLOOD</h3>
      <form onSubmit={donateBlood}>
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
          <option value="">Select Blood Group</option>
          <option value="A+ve">A+ve</option>
          <option value="A-ve">A-ve</option>
          <option value="B+ve">B+ve</option>
          <option value="B-ve">B-ve</option>
          <option value="AB+ve">AB+ve</option>
          <option value="AB-ve">AB-ve</option>
          <option value="O+ve">O+ve</option>
          <option value="O-ve">O-ve</option>
          <option value="PNull">P Null</option>
        </select>
        <button type="submit">DONATE</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Donate;
