import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  };

  return (
    <div>
      <h1>Sign up</h1>

      <div>
        <p>Hello {userName}</p>
        <form className="form">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            placeholder="username"
          />
          <input
            value={password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <Link to="/chooseskills">
            <button type="button">
              {/* <button type="button" onClick={handleFormSubmit}> */}
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
