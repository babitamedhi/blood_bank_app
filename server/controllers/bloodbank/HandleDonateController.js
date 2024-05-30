// // const UpdateDonate = (app, db) => {
// //     app.get("/login/emp/dr", (donate, res) => {
// //       //query
// //       const sqlSelect = "SELECT * FROM user_donate";
  
// //       //
// //       db.query(sqlSelect, (err, result) => {
// //         if (err) {
// //           console.log("**ERROR**" + err);
// //         }
// //         if (result.length > 0) {
// //           res.send(result);
// //         }
// //       });
// //     });
  
// //     app.delete("/login/emp/dr/:donate_id", (donate, res) => {
// //       //variables
// //       const donate_id = donate.params.donate_id;
  
// //       //query
// //       const sqlDelete = "DELETE FROM user_donate WHERE donate_id= ?";
// //       const sqlSelect1 = "SELECT * FROM user_donate WHERE donate_id=?";
// //       //const sqlSelect2 = "SELECT * FROM blood_stocks WHERE blood_group=?";
// //       //const sqlUpdate = "UPDATE blood_stocks SET unit=? WHERE blood_group=? ";
// //       //
// //       db.query(sqlSelect1, donate_id, (err, result) => {
// //         if (err) {
// //           console.log("**ERROR1**" + err);
// //         } else {
// //           result = JSON.parse(JSON.stringify(result));
// //           var donate_blood_group = result[0].blood_group;
// //           var donate_unit = result[0].unit;
// //           //
// //           db.query(sqlDelete,donate_id,(err,result)=>{
// //             if(err){
// //                 console.log("**ERROR**"+err);
// //             }
// //             else{
// //                 res.send({message: "DONATION REQUEST SERVERD!"})
// //             }
// //         })
  
// //         //   }else{
// //         //       res.send({message:"INSUFFICIENT STOCKS!"})
// //         //   }
            
// //           //});
// //        }
// //       //});
// //     //});
// //   });
  
// //   export default UpdateDonate;











// // //   db.query(sqlDelete,donate_id,(err,result)=>{
// // //     if(err){
// // //         console.log("**ERROR**"+err);
// // //     }
// // //     else{
// // //         res.send({message: "DONATION REQUEST SERVERD!"})
// // //     }







// //     // db.query(sqlSelect2, [_blood_group], (err, result) => {
// //     //     if (err) {
// //     //       console.log("**ERROR2**" + err);
// //     //     } else {
// //     //       result = JSON.parse(JSON.stringify(result));
// //     //   var stock_unit=result[0].unit;
// //     //   if(donate_unit<=stock_unit){
// //     //       var left_unit=stock_unit-donate_unit;
// //     //       //
// //     //       db.query(sqlUpdate,[left_unit,donate_blood_group],(err,result)=>{
// //     //           if(err){
// //     //               console.log("**ERROR3**"+err);
// //     //           }else{
// //     //               //
// //     //               db.query(sqlDelete,donate_id,(err,result)=>{
// //     //                   if(err){
// //     //                       console.log("**ERROR**"+err);
// //     //                   }
// //     //                   else{
// //     //                       res.send({message: "DONATION REQUEST SERVERD!"})
// //     //                   }
// //     //               })
// //     //           }
// //     //       })
// //     //     }
// //     // })




















// const UpdateDonate = (app, db) => {
//   app.get("/login/emp/dr", (req, res) => {
//       const sqlSelect = "SELECT * FROM user_donate";
//       db.query(sqlSelect, (err, result) => {
//           if (err) {
//               console.log("**ERROR**" + err);
//               return res.status(500).send({ message: "Internal server error" });
//           }
//           res.send(result);
//       });
//   });

//   app.delete("/login/emp/dr/:donate_id", (req, res) => {
//       const donate_id = req.params.donate_id;
//       const sqlDelete = "DELETE FROM user_donate WHERE donate_id = ?";
//       db.query(sqlDelete, donate_id, (err, result) => {
//           if (err) {
//               console.log("**ERROR**" + err);
//               return res.status(500).send({ message: "Error deleting donation request" });
//           }
//           res.send({ message: "DONATION REQUEST SERVED!" });
//       });
//   });
// };

// export default UpdateDonate;




// const UpdateDonate = (app, db) => {
//   app.get("/login/emp/dr", (req, res) => {
//     const sqlSelect = "SELECT * FROM user_donate";

//     db.query(sqlSelect, (err, result) => {
//       if (err) {
//         console.log("**ERROR**" + err);
//         return res.status(500).send({ message: "Internal server error" });
//       }

//       res.send(result);
//     });
//   });

//   app.delete("/login/emp/dr/:donate_id", (req, res) => {
//     const donate_id = req.params.donate_id;

//     const sqlDelete = "DELETE FROM user_donate WHERE donate_id = ?";

//     db.query(sqlDelete, donate_id, (err, result) => {
//       if (err) {
//         console.log("**ERROR**" + err);
//         return res.status(500).send({ message: "Internal server error" });
//       }

//       res.send({ message: "Donation request served successfully" });
//     });
//   });
// };

// export default UpdateDonate;


// In UpdateDonate.js
import express from 'express';
const router = express.Router();

const HandleDonate = (app, db) => {
  // Handle donation acceptance
  app.delete('/handle-donate/donation/:donate_id', (req, res) => {
    const { donate_id } = req.params;
    const sqlDelete = "DELETE FROM user_donate WHERE donate_id = ?";

    db.query(sqlDelete, [donate_id], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: "Error deleting donation request" });
      } else {
        res.send({ message: "Donation request accepted and deleted successfully" });
      }
    });
   });
};

export default HandleDonate;
