
import React from "react";
import axios from "axios";
import "../../assets/css/UserDash.css";

const UserDashboard = () => {
  const user_id = 1; // Replace with the actual user_id
  const blood_group = "O+"; // Replace with the actual blood group of the user

  const donate = () => {
    axios.post("http://localhost:3001/donate", { user_id, blood_group })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error("There was an error making the donation request!", error);
        alert("Failed to submit donation request");
      });
  };

  const request = () => {
    window.location = '/request';
  };

  return (
    <div className="user-dash">
      <button onClick={donate}>DONATE</button>
      <button onClick={request}>REQUEST</button>
    </div>
  );
};

export default UserDashboard;
