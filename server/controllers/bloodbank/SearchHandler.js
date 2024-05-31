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
