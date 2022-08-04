import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
//currentPage is the state, and handlePageChange is how you update
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#welcome"
          onClick={() => handlePageChange("Welcome")}
          // Check to see if the currentPage is `Welcome`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Welcome" ? "nav-link active" : "nav-link"}
        >
          Welcome
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#login"
          onClick={() => handlePageChange("Login")}
          // // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Log in
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#signup"
          onClick={() => handlePageChange("SignUp")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Sign up
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
