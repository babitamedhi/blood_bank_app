import express from 'express';
const router = express.Router();

const DonateRequestControl = (app, db) => {
  // Handle donation request
  app.get('/handle-donate/donate', (req, res) => {
    //const { user_id, blood_group } = req.body;
    const sqlInsert = "SELECT * FROM user_donate";

    db.query(sqlInsert,  (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({ message: "Error in retrieving donation request" });
      } else {
        res.send(result);
      }
    });
  });
};

export default DonateRequestControl;
