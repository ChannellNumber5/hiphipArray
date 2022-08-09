import React, { useState } from "react";
import { Link} from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import  Auth from '../../utils/auth';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error }] = useMutation(LOGIN);

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of the email or password
    if (inputType === "password") {
      setPassword(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {email: email, password: password},
      });
      const token = mutationResponse.data.login.token;
      console.log("here is the token" + token);
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          name="password"
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
        />
          <button type='submit'>Login</button>
        </form>
    </div>
  );
}
