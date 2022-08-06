import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ChooseSkills() {
  const [userskills, setSkills] = useState([]);

  const handleChange = (event) => {
    setSkills(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Let's Create Your Profile!</h1>
      <h1>What are your skills?</h1>
      <p>{userskills}</p>
      <ul>
        <li>
          <button onClick={handleChange} value="HTML">
            HTML
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="CSS">
            CSS
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="JavaScript">
            JavaScript
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="React">
            React
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="Python">
            Python
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="Node">
            Node
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="SQL">
            SQL
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="Angular">
            Angular
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="MongoDB">
            MongoDB
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="PHP">
            PHP
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="Jira">
            Jira
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="Java">
            Java
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="C++">
            C++
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="C#">
            C#
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="Swift">
            Swift
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="G0">
            G0
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="Ruby">
            Ruby
          </button>
        </li>
        <li>
          <button onClick={handleChange} value="TypeScript">
            TypeScript
          </button>
        </li>
      </ul>
      <p>
        <Link to="/myprofile">
          <button>Finish Profile</button>
        </Link>
      </p>
    </div>
  );
}
