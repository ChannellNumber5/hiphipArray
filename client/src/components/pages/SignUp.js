import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth'
import { ADD_USER } from "../../utils/mutations";

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        username: formState.username,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <Link to="/login">← Go to Login</Link>
      <h1>Sign up</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          placeholder="user"
          name="username"
          type="username"
          id="username"
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          placeholder="youremail@test.com"
          name="email"
          type="email"
          id="email"
          onChange={handleChange}
        />
        <label htmlFor="pwd">Password:</label>
        <input
          placeholder="******"
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange}
        />
        {/* <Link to="/createprofile"> */}
          <button type="submit">Submit</button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default Signup;
