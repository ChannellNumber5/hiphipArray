import React from "react";
import { Link } from "react-router-dom";

const userskills = [];

const addskill = () => {
  const [userskills, setList] = React.useState([]);
};

// function addskill(e) {
//   userskills.push(e.target);
//   console.log(userskills);
// }

export default function ChooseSkills() {
  return (
    <div>
      <h1>Let's Create Your Profile!</h1>
      <h1>What are your skills?</h1>
      <ul>
        <li>
          <button onclick={addskill}>HTML</button>
        </li>
        <li>
          <button>CSS</button>
        </li>
        <li>
          <button>JavaScript</button>
        </li>
        <li>
          <button>React</button>
        </li>
        <li>
          <button>Python</button>
        </li>
        <li>
          <button>Node</button>
        </li>
        <li>
          <button>SQL</button>
        </li>
        <li>
          <button>Angular</button>
        </li>
        <li>
          <button>MongoDB</button>
        </li>
        <li>
          <button>PHP</button>
        </li>
        <li>
          <button>Jira</button>
        </li>
        <li>
          <button>Java</button>
        </li>
        <li>
          <button>C++</button>
        </li>
        <li>
          <button>C#</button>
        </li>
        <li>
          <button>Swift</button>
        </li>
        <li>
          <button>G0</button>
        </li>
        <li>
          <button>Ruby</button>
        </li>
        <li>
          <button>TypeScript</button>
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
