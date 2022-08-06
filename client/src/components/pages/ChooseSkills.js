import React from "react";
import { Link } from "react-router-dom";

export default function ChooseSkills() {
  return (
    <div>
      <h1>Choose your skills</h1>
      <p>
        <Link to="/myprofile">
          <button>Finish Profile</button>
        </Link>
      </p>
    </div>
  );
}
