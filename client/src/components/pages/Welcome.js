import React from "react";
import { Link } from "react-router-dom";
import Sbutton from "../Button";

const signup = "Sign Up";
const login = "login";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome Page</h1>
      <p>
        <Link to="/signup">
          <Sbutton text={signup} />
        </Link>
        <Link to="/login">
          <Sbutton text={login} />
        </Link>
      </p>
    </div>
  );
}
