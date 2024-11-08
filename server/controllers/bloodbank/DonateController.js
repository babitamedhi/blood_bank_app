// export default DonateClassHandler;

// In DonateClassHandler.js
import express from 'express';
const router = express.Router();

const DonateClassHandler = (app, db) => {
  // Handle donation request
  app.post('/donate', (req, res) => {
    const { user_id, blood_group } = req.body;
    const sqlInsert = "INSERT INTO user_donate (user_id, blood_group) VALUES (?, ?)";

    db.query(sqlInsert, [user_id, blood_group], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: "Error inserting donation request" });
      } else {
        res.send({ message: "Donation request submitted successfully" });
      }
    });
  });
};

export default DonateClassHandler;
