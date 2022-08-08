import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import  Auth from '../../utils/auth';

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error }] = useMutation(LOGIN);

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

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {username: userName, password: password},
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>
        <form onSubmit={handleFormSubmit}>
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
          <button type='submit'>Login</button>
        </Link>
        </form>
      </p>
    </div>
  );
}
