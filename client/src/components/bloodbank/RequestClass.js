import React, { Component } from "react";
import Axios from "axios";

export default class RequestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodGroup: [],
      req_blood: "A+ve",
      req_unit: 0,
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.request = this.request.bind(this);
  }

  componentDidMount() {
    this.setState({
      bloodGroup: [
        { id: "A+ve", label: "A+ve" },
        { id: "A-ve", label: "A-ve" },
        { id: "B+ve", label: "B+ve" },
        { id: "B-ve", label: "B-ve" },
        { id: "AB+ve", label: "AB+ve" },
        { id: "AB-ve", label: "AB-ve" },
        { id: "O+ve", label: "O+ve" },
        { id: "O-ve", label: "O-ve" },
        { id: "PNull", label: "PNull" },
      ],
    });
  }

  handleChange = (e) => {
    this.setState({ req_blood: e.target.value });
  };

  updateUnit = (e) => {
    this.setState({ req_unit: e.target.value });
  };

  request = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/request", {
      blood_group: this.state.req_blood,
      unit: this.state.req_unit,
    }).then((response) => {
      this.setState({ message: response.data.message });
    }).catch((error) => {
     // this.setState({ message: "Error requesting blood" });
     this.setState({ message: "INSUFFICIENT STOCK" });
    });
  };

  render() {
    const { bloodGroup, message } = this.state;

    let bloodGroupList =
      bloodGroup.length > 0 &&
      bloodGroup.map((blood) => {
        return (
          <option key={blood.id} value={blood.id}>
            {blood.label}
          </option>
        );
      });

    return (
      <div className="request" style={{textAlign: "center", background: "linear-gradient(to top, #eee9e9, #cec7c7, white, white , white)", padding: "200px"}}>
        <form onSubmit={this.request} style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f0f0f0', // Light gray background
  padding: '1rem',
  marginLeft: '160px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
  width: '80%',
  maxWidth: '500px',
}}>
          <select value={this.state.req_blood} onChange={this.handleChange} style={{
      margin: '1em 0',
      padding: '1em',
      width: '100%',
      fontSize: '1rem', // Adjust input font size
    }}>
            {bloodGroupList}
          </select>
          <input type="number" placeholder="UNIT" onChange={this.updateUnit} style={{
      margin: '1em 0',
      padding: '1em',
      width: '100%',
      fontSize: '1rem', // Adjust input font size
    }} />
          <button type="submit" style={{
      margin: '1em 0',
      padding: '1em',
      width: '100%',
      fontSize: '1rem', // Adjust button font size
      backgroundColor: '#be0000', // Blue button
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px',
    }}>REQUEST</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  }
}
