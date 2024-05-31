import React, { useState, useEffect } from "react";
import Axios from "axios";

//css
import "../../assets/css/Search.css";

const Search = () => {
  const [place, setPlace] = useState("");
  const [blood, setBlood] = useState("");
  const [searchList, setSearchList] = useState([]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          Axios.get(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=4e49ccc3eb784d4d84cf5b6e6ca2eca2`
          )
            .then((response) => {
              const cityName = response.data.features[0].properties.city;
              setPlace(cityName);
            })
            .catch((error) => {
              console.error("Error getting location:", error);
            });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (place || blood) {
      Axios.post("http://localhost:3001/home/search", {
        place: place,
        blood: blood,
      })
        .then((response) => {
          if (response.data.message) {
            // Handle no search results
          } else {
            setSearchList(response.data);
          }
        })
        .catch((error) => {
          console.error("Error searching for blood:", error);
        });
    }
  }, [blood, place]);

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="PLACE"
          name="place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        <input
          type="text"
          placeholder="BLOOD GROUP"
          name="bloodGroup"
          value={blood}
          onChange={(e) => setBlood(e.target.value)}
        />
        <button type="button" className="update-button" onClick={getLocation}>
          Get Location
        </button>
      </form>
      <table className="blood-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Place</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {searchList.map((val, i) => (
            <tr key={i}>
              <td>{val.userFName}</td>
              <td>{val.userPhone}</td>
              <td>{val.userPlace}</td>
              <td>{val.userBloodGroup}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
