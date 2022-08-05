import React from "react";
import { Link } from "react-router-dom";

export default function CreateProfile() {
  return (
    <div>
      <h1>Create Your Profile</h1>
      <p>
        <Link to="/chooseskills">
          <button>Submit</button>
        </Link>
      </p>
    </div>
  );
}
