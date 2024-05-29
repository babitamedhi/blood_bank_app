// // // ///module export
// // // const RequestClassHandler = (app, db) => {
// // //   app.post("/request", (req, res) => {
// // //     const blood_group = req.body.blood_group;
// // //     const unit = req.body.unit;
// // //     //const username = req.body.username; //New

// // //     console.log("bloodgroup : " + blood_group);
// // //     //query

// // //     //New
// // //     // const sqlSelectUserId ="SELECT user_id FROM user_details WHERE user_name = ?";
// // //     // db.query(sqlSelectUserId, [username], (err, userResult) => {
// // //     //   if (err) {
// // //     //     console.log("**ERROR retrieving user_id: " + err);
// // //     //     return res.status(500).send({ message: "Internal server error" });
// // //     //   }

// // //     //   if (userResult.length === 0) {
// // //     //     return res.status(404).send({ message: "User not found" });
// // //     //   }

// // //     //   const user_id = userResult[0].user_id;

// // //     //   //New
// // //     const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group=?";
// // //     const sqlInsert =
// // //       "INSERT INTO  user_request(blood_group,unit) VALUES (?,?)";
// // //     //
// // //     db.query(sqlSelect, [blood_group], (err, result) => {
// // //       if (err) {
// // //         console.log("**ERROR**" + err);
// // //       } else {
// // //         result = JSON.parse(JSON.stringify(result));
// // //         console.log(result[0].unit);
// // //         if (unit <= result[0].unit) {
// // //           //
// // //           db.query(sqlInsert, [ blood_group, unit], (err, result) => {
// // //             if (err) {
// // //               console.log("**ERROR ACCEPTING REQUEST!" + err);
// // //             } else {
// // //               res.send({
// // //                 message: "REQUEST ACCEPETED COLLECT IT FROM THE BLOOD BANK",
// // //               });
// // //             }
// // //           });
// // //         } else {
// // //           res.send({ message: "INSUFFICIENT STOCKS!" });
// // //         }
// // //       }
// // //     });
    
// // //   });
// // // };

// // // export default RequestClassHandler;


// // const RequestClassHandler = (app, db) => {
// //   app.post("/request", (req, res) => {
// //     const blood_group = req.body.blood_group;
// //     const unit = req.body.unit;
// //     const user_id = req.body.user_id; // Assuming user_id is provided in the request

// //     console.log("bloodgroup : " + blood_group);

// //     const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group = ?";
// //     const sqlInsert = "INSERT INTO user_request(user_id, blood_group, unit) VALUES (?, ?, ?)";

// //     db.query(sqlSelect, [blood_group], (err, result) => {
// //       if (err) {
// //         console.log("**ERROR**" + err);
// //         return res.status(500).send({ message: "Internal server error" });
// //       }

// //       if (result.length === 0 || unit > result[0].unit) {
// //         return res.status(400).send({ message: "INSUFFICIENT STOCKS!" });
// //       }

// //       db.query(sqlInsert, [user_id, blood_group, unit], (err, insertResult) => {
// //         if (err) {
// //           console.log("**ERROR ACCEPTING REQUEST!" + err);
// //           return res.status(500).send({ message: "Error accepting request" });
// //         }

// //         res.status(200).send({ message: "REQUEST HAVE BEEN SENT. YOU WILL BE NOTIFIED" });
// //       });
// //     });
// //   });
// // };

// // export default RequestClassHandler;




// const RequestClassHandler = (app, db) => {
//   app.post("/request", (req, res) => {
//     const blood_group = req.body.blood_group;
//     const unit = req.body.unit;
//     const user_id = req.body.user_id; // Assuming user_id is provided in the request

//     console.log("bloodgroup : " + blood_group);

//     const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group = ?";
//     const sqlInsert = "INSERT INTO user_request(user_id, blood_group, unit) VALUES (?, ?, ?)";

//     db.query(sqlSelect, [blood_group], (err, result) => {
//       if (err) {
//         console.log("**ERROR**" + err);
//         return res.status(500).send({ message: "Internal server error" });
//       }

//       if (result.length === 0 || unit > result[0].unit) {
//         return res.status(400).send({ message: "INSUFFICIENT STOCKS!" });
//       }

//       db.query(sqlInsert, [user_id, blood_group, unit], (err, insertResult) => {
//         if (err) {
//           console.log("**ERROR ACCEPTING REQUEST!" + err);
//           return res.status(500).send({ message: "Error accepting request" });
//         }

//         res.status(200).send({ message: "REQUEST HAVE BEEN SENT. YOU WILL BE NOTIFIED" });
//       });
//     });
//   });
// };

// export default RequestClassHandler;













// const RequestClassHandler = (app, db) => {
//   app.post("/request", (req, res) => {
//     const blood_group = req.body.blood_group;
//     const unit = req.body.unit;
//     const user_id = req.body.user_id; // Assuming user_id is provided in the request

//     console.log("bloodgroup : " + blood_group);

//     const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group = ?";
//     const sqlInsert = "INSERT INTO user_request(user_id, blood_group, unit) VALUES (?, ?, ?)";

//     db.query(sqlSelect, [blood_group], (err, result) => {
//       if (err) {
//         console.log("**ERROR**" + err);
//         return res.status(500).send({ message: "Internal server error" });
//       }

//       if (result.length === 0 || unit > result[0].unit) {
//         return res.status(400).send({ message: "INSUFFICIENT STOCKS!" });
//       }

//       db.query(sqlInsert, [user_id, blood_group, unit], (err, insertResult) => {
//         if (err) {
//           console.log("**ERROR ACCEPTING REQUEST!" + err);
//           return res.status(500).send({ message: "Error accepting request" });
//         }

//         res.status(200).send({ message: "REQUEST HAVE BEEN SENT. YOU WILL BE NOTIFIED" });
//       });
//     });
//   });
// };

// export default RequestClassHandler;
// const DonateClassHandler = (app, db) => {
//     app.post("/donate", (donate, res) => {
//       const blood_group = donate.body.blood_group;
//       //const unit = donate.body.unit;
//       const user_id = donate.body.user_id; // Assuming user_id is provided in the request
  
//       console.log("bloodgroup : " + blood_group);
  
//       const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group = ?";
//       const sqlInsert = "INSERT INTO user_donate(user_id, blood_group) VALUES (?, ?)";
  
//       db.query(sqlSelect, [blood_group], (err, result) => {
//         if (err) {
//           console.log("**ERROR**" + err);
//           return res.status(500).send({ message: "Internal server error" });
//         }
  
//         // if (result.length === 0 || unit > result[0].unit) {
//         //   return res.status(400).send({ message: "INSUFFICIENT STOCKS!" });
//         // }
  
//         db.query(sqlInsert, [user_id, blood_group], (err, insertResult) => {
//           if (err) {
//             console.log("**ERROR ACCEPTING REQUEST!" + err);
//             return res.status(500).send({ message: "INSUFFICIENT STOCKS!" });
//           }
  
//           res.status(200).send({ message: "REQUEST HAVE BEEN SENT. YOU WILL BE NOTIFIED" });
//         });
//       });
//     });
//   };
  
//   export default DonateClassHandler;
  



const DonateClassHandler = (app, db) => {
  app.post("/donate", (req, res) => {
    const { blood_group, user_id } = req.body;

    if (!blood_group || !user_id) {
      return res.status(400).send({ message: "Invalid request data" });
    }

    const sqlInsert = "INSERT INTO user_donate (user_id, blood_group) VALUES (?, ?)";

    db.query(sqlInsert, [user_id, blood_group], (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
        return res.status(500).send({ message: "Internal server error" });
      }

      res.status(200).send({ message: "Donation request has been submitted successfully" });
    });
  });
};

export default DonateClassHandler;

