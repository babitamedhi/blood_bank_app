// import React, { useState, useEffect } from "react";
// import Axios from "axios";

// //css
// import "../../assets/css/Search.css";

// const Search = () => {
//   //variables
//   var [place, setplace] = useState("");
//   var [blood, setblood] = useState("");
//   const [searchList, setsearchList] = useState([]);

//   //search for blood
//   useEffect(() => {
//     Axios.post("http://localhost:3001/home/search", {
//       place: place,
//       blood: blood,
//     }).then((response) => {
//       if (response.data.message) {
//         //alert(response.data.message);
//       } else {
//         setsearchList(response.data);
//       }
//     });
//   },[blood, place]);

//   //returning
//   return (
//     <div className="search">
//       {" "}
//       <form>
//         <input
//           type="text"
//           placeholder="PLACE"
//           name="place"
//           onChange={(e) => {
//             setplace(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="BLOOD GROUP"
//           name="bloodGroup"
//           onChange={(e) => {
//             setblood(e.target.value);
//           }}
//         />
//         {/* <button onClick={()=>useEffect}><i className="fa fa-search"/></button> */}
//       </form>
//       <table className="blood-table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Phone </th>
//             <th>Place</th>
//             <th>BloodGroup</th>
//           </tr>
//         </thead>
//         <tbody>
//           {searchList.map((val,i) => {
//             return (
//               <tr key={i}>
//                 <td>{val.userFName}</td>
//                 <td>{val.userPhone}</td>
//                 <td>{val.userPlace}</td>
//                 <td>{val.userBloodGroup}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Search;


import React, { useState, useEffect } from "react";
import Axios from "axios";

//css
import "../../assets/css/Search.css";

const Search = () => {
  //variables
  const [place, setPlace] = useState("");
  const [blood, setBlood] = useState("");
  const [searchList, setSearchList] = useState([]);

  // Function to handle getting the user's location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          // Perform reverse geocoding to get the city or district name
          Axios.get(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=4e49ccc3eb784d4d84cf5b6e6ca2eca2`
          )
            .then((response) => {
              // Get the city or district name from the response
              const cityName = response.data.features[0].properties.city;
              // Update the place state variable with the obtained city or district name
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

  // Search for blood
  useEffect(() => {
    Axios.post("http://localhost:3001/home/search", {
      place: place,
      blood: blood,
    })
      .then((response) => {
        if (response.data.message) {
          //alert(response.data.message);
        } else {
          setSearchList(response.data);
        }
      })
      .catch((error) => {
        console.error("Error searching for blood:", error);
      });
  }, [blood, place]);

  // Return
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="PLACE"
          name="place"
          value={place}
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="BLOOD GROUP"
          name="bloodGroup"
          value={blood}
          onChange={(e) => {
            setBlood(e.target.value);
          }}
        />
        <button type="button" onClick={getLocation}>
          Get Location
        </button>
      </form>
      <table className="blood-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone </th>
            <th>Place</th>
            <th>BloodGroup</th>
          </tr>
        </thead>
        <tbody>
          {searchList.map((val, i) => {
            return (
              <tr key={i}>
                <td>{val.userFName}</td>
                <td>{val.userPhone}</td>
                <td>{val.userPlace}</td>
                <td>{val.userBloodGroup}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Search;

