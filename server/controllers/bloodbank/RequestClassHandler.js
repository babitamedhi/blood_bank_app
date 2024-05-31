// export default RequestClassHandler;
const RequestClassHandler = (app, db) => {
  app.post("/request", (req, res) => {
    const blood_group = req.body.blood_group;
    const unit = req.body.unit;
    const user_id = req.body.user_id; // Assuming user_id is provided in the request

    console.log("bloodgroup : " + blood_group);

    const sqlSelect = "SELECT * FROM blood_stocks WHERE blood_group = ?";
    const sqlInsert = "INSERT INTO user_request(user_id, blood_group, unit) VALUES (?, ?, ?)";

    db.query(sqlSelect, [blood_group], (err, result) => {
      if (err) {
        console.log("**ERROR**" + err);
        return res.status(500).send({ message: "Internal server error" });
      }

      if (result.length === 0 || unit > result[0].unit) {
        return res.status(400).send({ message: "INSUFFICIENT STOCKS!" });
      }

      db.query(sqlInsert, [user_id, blood_group, unit], (err, insertResult) => {
        if (err) {
          console.log("**ERROR ACCEPTING REQUEST!" + err);
          return res.status(500).send({ message: "INSUFFICIENT STOCKS!" });
        }

        res.status(200).send({ message: "REQUEST HAVE BEEN SENT. YOU WILL BE NOTIFIED" });
      });
    });
  });
};

export default RequestClassHandler;
