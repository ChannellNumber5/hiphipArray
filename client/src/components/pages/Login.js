import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of username or password
    if (inputType === "password") {
      setPassword(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
  };

  return (
    <div>
      <h1>Login</h1>
      <p>
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
       

        <Link to="/myprofile">
          <button>Login</button>
        </Link>

        <Button colorScheme='purple' variant='solid'>Login</Button>

        
      </p>
    </div>
  );
}
