// // // import React, { useState, useEffect } from "react";
// // // import Axios from "axios";

// // // //css
// // // import "../../assets/css/HandleDonate.css";

// // // const HandleDonate = () => {
// // //   //Variables
// // //   const [DonateTable, setDonateTable] = useState([]);

// // //   useEffect(() => {
// // //     Axios.get("http://localhost:3001/login/emp/dr").then((response) => {
// // //       if (response) {
// // //         setDonateTable(response.data);
// // //       } else {
// // //         alert("error in retrieving request table");
// // //       }
// // //     });
// // //   });

// // //   //
// // //   const serveDonate = (donate_id) => {
// // //     //console.log(`request id : ${req_id}`);
// // // const delUrl = "http://localhost:3001/login/emp/dr/"+donate_id;
// // //     Axios.delete( delUrl).then((response) => {
// // //       if (response.data.message) {
// // //         alert(response.data.message);
// // //       }
// // //     });
// // //   };
// // //   return (
// // //     <div className="handle-donate">
// // //       <h1>DONATE_REQUEST_TABLE</h1>
// // //       <table className="donate-table">
// // //         <thead>
// // //           <th>DONATE-ID</th>
// // //           <th>BLOOD GROUP</th>
          
// // //         </thead>
// // //         <tbody>
// // //           {DonateTable.map((donate, i) => {
// // //             return (
// // //               <tr key={i}>
// // //                 <td>{donate.req_id}</td>
// // //                 <td>{donate.blood_group}</td>
// // //                 <button
// // //                   onClick={() => {
// // //                     serveDonate(donate.donate_id);
// // //                   }}
// // //                 >
// // //                   ACCEPT/SERVE
// // //                 </button>
// // //               </tr>
// // //             );
// // //           })}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default HandleDonate;




// // import React, { useState, useEffect } from "react";
// // import Axios from "axios";

// // //css
// // import "../../assets/css/HandleDonate.css";

// // const HandleDonate = () => {
// //   const [DonateTable, setDonateTable] = useState([]);

// //   useEffect(() => {
// //     Axios.get("http://localhost:3001/login/emp/dr")
// //       .then((response) => {
// //         if (response && response.data) {
// //           setDonateTable(response.data);
// //         } else {
// //           alert("Error in retrieving request table");
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("There was an error fetching the donate table!", error);
// //         alert("Error in retrieving request table");
// //       });
// //   }, []);

// //   const serveDonate = (donate_id) => {
// //     const delUrl = `http://localhost:3001/login/emp/dr/${donate_id}`;
// //     Axios.delete(delUrl)
// //       .then((response) => {
// //         if (response.data.message) {
// //           alert(response.data.message);
// //           setDonateTable(DonateTable.filter((donate) => donate.donate_id !== donate_id));
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("There was an error serving the donate request!", error);
// //         alert("Error in serving the donation request");
// //       });
// //   };

// //   return (
// //     <div className="handle-donate">
// //       <h1>DONATE REQUEST TABLE</h1>
// //       <table className="donate-table">
// //         <thead>
// //           <tr>
// //             <th>DONATE-ID</th>
// //             <th>BLOOD GROUP</th>
// //             <th>ACTIONS</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {DonateTable.map((donate, i) => (
// //             <tr key={i}>
// //               <td>{donate.donate_id}</td>
// //               <td>{donate.blood_group}</td>
// //               <td>
// //                 <button
// //                   onClick={() => {
// //                     serveDonate(donate.donate_id);
// //                   }}
// //                 >
// //                   ACCEPT/SERVE
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default HandleDonate;





// import React, { useState, useEffect } from "react";
// import Axios from "axios";

// //css
// import "../../assets/css/HandleDonate.css";

// const HandleDonate = () => {
//   const [donateTable, setDonateTable] = useState([]);

//   useEffect(() => {
//     Axios.get("http://localhost:3001/login/emp/dr").then((response) => {
//       setDonateTable(response.data);
//     }).catch((error) => {
//       alert("Error in retrieving request table");
//     });
//   }, []);

//   const serveDonate = (donate_id) => {
//     Axios.delete(`http://localhost:3001/login/emp/dr/${donate_id}`).then((response) => {
//       if (response.data.message) {
//         alert(response.data.message);
//         setDonateTable(donateTable.filter(donate => donate.donate_id !== donate_id));
//       }
//     }).catch((error) => {
//       alert("Error serving donation request");
//     });
//   };

//   return (
//     <div className="handle-donate">
//       <h1>DONATE REQUEST TABLE</h1>
//       <table className="donate-table">
//         <thead>
//           <tr>
//             <th>DONATE-ID</th>
//             <th>BLOOD GROUP</th>
//             <th>ACTION</th>
//           </tr>
//         </thead>
//         <tbody>
//           {donateTable.map((donate, i) => (
//             <tr key={i}>
//               <td>{donate.donate_id}</td>
//               <td>{donate.blood_group}</td>
//               <td>
//                 <button onClick={() => serveDonate(donate.donate_id)}>ACCEPT/SERVE</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default HandleDonate;




// In HandleDonate.js
import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../assets/css/HandleDonate.css";

const HandleDonate = () => {
  const [donateTable, setDonateTable] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/handle-donate/donate").then((response) => {
      console.log(response.data)
      setDonateTable(response.data);
      console.log("Donate Table",donateTable)
    }).catch((error) => {
      alert("Error in retrieving donation requests");
    });
  }, []);

  const serveDonate = (donate_id) => {
    Axios.delete(`http://localhost:3001/handle-donate/donation/${donate_id}`).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
        setDonateTable(donateTable.filter(donate => donate.donate_id !== donate_id));
      }
    }).catch((error) => {
      alert("Error serving donation request");
    });
  };

  return (
    <div className="handle-donate">
      <h1>DONATION REQUEST TABLE</h1>
      <table className="donate-table">
        <thead>
          <tr>
            <th>DONATE-ID</th>
            <th>BLOOD GROUP</th>
            <th>Verified</th>
          </tr>
        </thead>
        <tbody>
          {donateTable.map((donate, i) => (
            <tr key={i}>
              <td>{donate.donate_id}</td>
              <td>{donate.blood_group}</td>
              <td>
                <button onClick={() => serveDonate(donate.donate_id)}>ACCEPT/SERVE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleDonate;
