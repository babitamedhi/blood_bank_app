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
