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
  }, );

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
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {donateTable.map((donate, i) => (
            <tr key={i}>
              <td>{donate.donate_id}</td>
              <td>{donate.blood_group}</td>
              <td>
                <button onClick={() => serveDonate(donate.donate_id)}>HANDLE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleDonate;
