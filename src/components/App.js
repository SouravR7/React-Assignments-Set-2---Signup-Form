import React, { Component, useState } from "react";
import "../styles/App.css";

const initialState = {
  Name: "",
  Email: "",
  PhoneNumber: "",
  Password: "",
  Gender: "Male"
};
function App() {
  const [state, setState] = useState(initialState);

  let [nameError, setNameError] = useState("");
  let [passwordError, setPasswordError] = useState("");
  let [phoneNumberError, setPhoneNumberError] = useState("");
  let [emailError, setEmailError] = useState("");
  let [genderError, setGenderError] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [userName, setUserName] = useState("");

  const validateName = (name) => {
    const alphanumeric = /^[0-9a-zA-Z ]+$/;
    if (!name.match(alphanumeric)) {
      setNameError("Name is not alphanumeric");
      console.log("error");
      return false;
    } else {
      return true;
    }
  };

  const validateEmail = (email) => {
    if (email.indexOf("@") < 1) {
      setEmailError("Email must contain @");
      return false;
    } else {
      return true;
    }
  };

  const validatePhoneNumber = (number) => {
    const numbers = /^\d+$/;
    if (!numbers.test(number)) {
      setPhoneNumberError("Phone Number must contain only numbers");
      return false;
    } else {
      return true;
    }
  };

  const validatePassword = (pwd) => {
    if (pwd.length < 6) {
      setPasswordError("Password must contain atleast 6 letters");
      return false;
    } else {
      return true;
    }
  };

  const validateGender = (gender) => {
    if (!gender) {
      setGenderError("Please identify as male, female or others");
      return false;
    } else {
      return true;
    }
  };

  // const isValidate = (property) => {
  //   if (property === "Name") {
  //     validateName();
  //   } else if (property === "Email") {
  //     validateEmail();
  //   } else if (property === "PhoneNumber") {
  //     validatePhoneNumber();
  //   } else if (property === "Password") {
  //     validatePassword();
  //   } else if (property === "Gender") {
  //     validateGender();
  //   }
  // };
  const handleChange = (property, event) => {
    //console.log("vhanged");
    const stateCopy = { ...state };
    stateCopy[property] = event.target.value;
    //console.log(stateCopy[property]);
    setState(stateCopy);
    //isValidate(property);
  };

  const handleSubmit = () => {
    if (
      state.Name === "" ||
      state.Email === "" ||
      state.PhoneNumber === "" ||
      state.Gender === "" ||
      state.Password === ""
    ) {
      setErrorMessage("All fields are mandatory");
      //return;
    } else if (
      validateName(state.Name) &&
      validateEmail(state.Email) &&
      validatePhoneNumber(state.PhoneNumber) &&
      validateGender(state.Gender) &&
      validatePassword(state.Password)
    ) {
      const user = state.email.substring(0, state.email.indexOf("@"));
      setUserName(user);
      //setState(initialState);
    }
  };

  return (
    <div id="main">
      {errorMessage && <div>{errorMessage}</div>}
      {userName && <div>Hello {userName}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            data-testid="name"
            type="text"
            value={state.Name}
            placeholder="name"
            onChange={(event) => handleChange("Name", event)}
          />
        </div>
        <div>{nameError}</div>
        <br />
        <div>
          <label>Email address :</label>
          <input
            data-testid="email"
            type="text"
            value={state.Email}
            placeholder="email"
            onChange={(event) => handleChange("Email", event)}
          />
        </div>
        <div>{emailError}</div>
        <br />
        <div>
          <label>Phone Number :</label>
          <input
            data-testid="phoneNumber"
            type="text"
            value={state.PhoneNumber}
            placeholder="phone number"
            onChange={(event) => handleChange("PhoneNumber", event)}
          />
        </div>
        <div>{phoneNumberError}</div>
        <br />
        <div>
          <label>Password :</label>
          <input
            data-testid="password"
            type="password"
            value={state.Password}
            placeholder="password"
            onChange={(event) => handleChange("Password", event)}
          />
        </div>
        <div>{passwordError}</div>
        <br />
        <div>
          <label>Gender :</label>
          <input
            data-testid="gender"
            type="text"
            value={state.Gender}
            placeholder="Gender"
            onChange={(event) => handleChange("Gender", event)}
          />
        </div>
        {genderError.length > 1 ? <div>{genderError}</div> : ""}
        <br />
        <div>
          <button data-testid="submit" type="submit">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
