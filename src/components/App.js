import React from "react";
//import styles from "./styles";
import "../styles/App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: "",
      errorMessage: "",
      userName: ""
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePhoneNoChange = (event) => {
    this.setState({ phNo: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleChangeValue = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleSubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    const numbers = /^\d+$/;
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phNo === "" ||
      this.state.gender === "" ||
      this.state.password === ""
    ) {
      this.setState({ errorMessage: "All fields are mandatory", userName: "" });
      return;
    }
    if (!this.state.name.match(alphanumeric)) {
      this.setState({ errorMessage: "Name is not alphanumeric", userName: "" });
      return;
    }
    if (this.state.email.indexOf("@") < 1) {
      this.setState({ errorMessage: "Email must contain @", userName: "" });
      return;
    }

    if (!this.state.gender) {
      this.setState({
        errorMessage: "Please identify as male, female or others",
        userName: ""
      });
      return;
    }
    if (!numbers.test(this.state.phNo)) {
      this.setState({
        errorMessage: "Phone Number must contain only numbers",
        userName: ""
      });
      return;
    }
    if (this.state.password.length < 6) {
      this.setState({
        errorMessage: "Password must contain atleast 6 letters",
        userName: ""
      });
      return;
    }
    const user = this.state.email.substring(0, this.state.email.indexOf("@"));
    this.setState({
      userName: user,
      errorMessage: "",
      name: "",
      email: "",
      gender: "male",
      phNo: "",
      password: ""
    });
  };

  render() {
    return (
      <>
        <div>
          {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
          {this.state.userName && <div>Hello {this.state.userName}</div>}
          <div>
            <label>Name :</label>
            <input
              data-testid="name"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <br />
          <div>
            <label>Email :</label>
            <input
              data-testid="email"
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
          </div>
          <br />
          <div>
            <label>Gender :</label>
            <input
              data-testid="gender"
              type="text"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChangeValue}
            />
          </div>
          <br />
          <div>
            <label>Phone No :</label>
            <input
              data-testid="phoneNumber"
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={this.state.phNo}
              onChange={this.handlePhoneNoChange}
            />
          </div>
          <br />
          <div>
            <label>Password :</label>
            <input
              data-testid="password"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </div>
          <br />
          <div>
            <button data-testid="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </>
    );
  }
}
