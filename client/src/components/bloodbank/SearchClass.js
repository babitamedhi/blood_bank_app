import React, { Component } from "react";
import Axios from "axios";

export default class SearchClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: "",
      blood: "",
      searchList: [],
    };
  }

  setPlace = (e) => {
    this.setState({ place: e.target.value });
  };

  setBlood = (e) => {
    this.setState({ blood: e.target.value });
  };

  searchBlood = () => {
    const { place, blood } = this.state;

    Axios.post("http://localhost:3001/home/search", { place, blood })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          this.setState({ searchList: response.data });
        }
      })
      .catch((error) => {
        console.error("Error searching for blood:", error);
      });
  };

  render() {
    return (
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="PLACE"
            name="place"
            onChange={this.setPlace}
          />
          <input
            type="text"
            placeholder="BLOOD GROUP"
            name="bloodGroup"
            onChange={this.setBlood}
          />
          <button type="button" onClick={this.searchBlood}>
            <i className="fa fa-search"></i>
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
            {this.state.searchList.map((val, i) => (
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
  }
}
