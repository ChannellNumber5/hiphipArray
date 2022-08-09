import React from "react";
import { Link } from "react-router-dom";
import ArrayButton from "../Button";

export default function Welcome() {
  return (
    <div>
      <h1>Welcome Page</h1>
      <p>
        <Link to="/signup">
          <ArrayButton/>
        </Link>
        <Link to="/login">
          <button>Log in</button>
        </Link>
      </p>
    </div>
  );
}
