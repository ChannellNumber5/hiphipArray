import React from "react";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
//currentPage is the state, and handlePageChange is how you update
function NavTabs({ currentPage, handlePageChange }) {
  return <ul className="nav nav-tabs"></ul>;
}

export default NavTabs;
