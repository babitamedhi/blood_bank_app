import React, { useEffect, useState } from "react";
import Axios from "axios";

import "../../assets/css/Request.css";

const Request = () => {
  //variables
  const [bloodTable, setBloodTable] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  const [requestUnit, setRequestUnit] = useState(0);
  const [message, setMessage] = useState("");

  //useEffect call
  useEffect(() => {
    Axios.get("http://localhost:3001/home").then((response) => {
      setBloodTable(response.data);
    });
  }, []);

  const requestBlood = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/request", {
      blood_group: bloodGroup,
      unit: requestUnit,
    }).then((response) => {
      setMessage(response.data.message);
    }).catch((error) => {
      setMessage("INSUFFICIENT STOCKS!");
    });
  };

  return (
    <div className="request">
      <h3>REQUEST BLOOD</h3>
      <table className="blood-table">
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.map((val) => (
            <tr key={val.b_id}>
              <td>{val.blood_group}</td>
              <td>{val.unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={requestBlood}>
        <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
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
        <input type="number" placeholder="UNITS" value={requestUnit} onChange={(e) => setRequestUnit(e.target.value)} />
        <button type="submit">REQUEST</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Request;
