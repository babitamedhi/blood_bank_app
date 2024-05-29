import React, { useEffect, useState } from "react";
import axios from "axios";

const DonationRequests = () => {
  const [donationRequests, setDonationRequests] = useState([]);

  useEffect(() => {
    fetchDonationRequests();
  }, []);

  const fetchDonationRequests = () => {
    axios
      .get("http://localhost:3001/login/emp/dr")
      .then((response) => {
        setDonationRequests(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the donation requests!", error);
      });
  };

  const handleDelete = (donate_id) => {
    axios
      .delete(`http://localhost:3001/login/emp/dr/${donate_id}`)
      .then((response) => {
        alert(response.data.message);
        fetchDonationRequests(); // Refresh the list after deletion
      })
      .catch((error) => {
        console.error("There was an error deleting the donation request!", error);
      });
  };

  return (
    <div>
      <h2>Donation Requests</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Donation ID</th>
            <th>Blood Group</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {donationRequests.map((request) => (
            <tr key={request.donate_id}>
              <td>{request.user_id}</td>
              <td>{request.donate_id}</td>
              <td>{request.blood_group}</td>
              <td>
                <button onClick={() => handleDelete(request.donate_id)}>
                  Accept
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationRequests;
