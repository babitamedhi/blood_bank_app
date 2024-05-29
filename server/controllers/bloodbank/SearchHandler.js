// //module export
// const SearchHandler = (app, db) => {
//   app.post("/home/search", (req, res) => {
//     //variables
//     const blood = req.body.blood;
//     const place = req.body.place;
//     //query
//     //console.log(blood + place);
//     const sqlSelect =
//       "SELECT * FROM user_details WHERE userBloodGroup = ? OR userPlace = ?";

//     //
//     db.query(sqlSelect, [blood, place], (err, result) => {
//       if (err) {
//         console.log("**   SEARCH ERROR   **" + err);
//       }

//       if (result.length > 0) {
//         res.send(result);
//         //console.log("**SEARCH RESULTS FOUND AND SEND TO FRONT END**");
//       } else {
//         res.send({ message: "NO SEARCH RESULTS FOUND!" });
//       }
//     });
//   });
// };

// export default SearchHandler;

// //Import necessary modules





// // import axios from 'axios';

// // const SearchHandler = (app, db) => {
// //   app.post("/home/search", async (req, res) => {
// //     // Variables
// //     const blood = req.body.blood;
// //     let place = req.body.place;

// //     // Function to fetch weather data based on latitude and longitude
// //     const fetchWeatherData = async (lat, lon) => {
// //       try {
// //         const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ac8888b33320bb59499aa5a556330d9`);
// //         return response.data.name; // Extract the district name from weather data
// //       } catch (error) {
// //         console.error("Error retrieving weather data:", error);
// //         return null;
// //       }
// //     };

// //     // Function to fetch user's current location
// //     const fetchLocation = async () => {
// //       try {
// //         // Simulate fetching user's location using navigator.geolocation
// //         const latitude = 40.7128; // Example latitude
// //         const longitude = -74.0060; // Example longitude
// //         return { latitude, longitude };
// //       } catch (error) {
// //         console.error("Error retrieving user's location:", error);
// //         return null;
// //       }
// //     };

// //     // Check if place is set to "my location"
// //     if (place.toLowerCase() === "my location") {
// //       const location = await fetchLocation();
// //       if (location) {
// //         const district = await fetchWeatherData(location.latitude, location.longitude);
// //         if (district) {
// //           place = district; // Set place to the district name
// //         }
// //       }
// //     }

// //     // Query
// //     const sqlSelect = "SELECT * FROM user_details WHERE userBloodGroup = ? OR userPlace = ?";

// //     // Database Query
// //     db.query(sqlSelect, [blood, place], (err, result) => {
// //       if (err) {
// //         console.log("**   SEARCH ERROR   **" + err);
// //         res.status(500).send({ message: "Internal server error" });
// //         return;
// //       }

// //       if (result.length > 0) {
// //         res.send(result);
// //       } else {
// //         res.send({ message: "NO SEARCH RESULTS FOUND!" });
// //       }
// //     });
// //   });
// // };

// // export default SearchHandler;




const SearchHandler = (app, db) => {
  app.post("/home/search", (req, res) => {
    const blood = req.body.blood;
    const place = req.body.place;

    let sqlSelect = "SELECT * FROM user_details WHERE 1=1";
    let params = [];

    if (blood) {
      sqlSelect += " AND userBloodGroup = ?";
      params.push(blood);
    }
    
    if (place) {
      sqlSelect += " AND userPlace = ?";
      params.push(place);
    }

    db.query(sqlSelect, params, (err, result) => {
      if (err) {
        console.log("**   SEARCH ERROR   **" + err);
        res.status(500).send({ message: "Internal server error" });
        return;
      }

      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "NO SEARCH RESULTS FOUND!" });
      }
    });
  });
};

export default SearchHandler;
