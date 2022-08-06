import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreateProfile() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "description") {
      setDescription(inputValue);
    }
  };

  return (
    <div>
      <h1>Create Your Profile</h1>
      <p>Hello {name}</p>
      <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          value={description}
          name="description"
          onChange={handleInputChange}
          type="text"
          placeholder="description"
        />
      </form>
      <p>
        <Link to="/chooseskills">
          <button>Next</button>
        </Link>
      </p>
    </div>
  );
}
