import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/SignUp";

// Menu Options
import Welcome from "./pages/Welcome";
import Profile from "./pages/myProfile";
import Project from "./pages/myProjects";
import Projects from "./pages/findProjects";
import Arrayers from "./pages/findArrayers";
import Requests from "./pages/requests";


export default function Container() {
  const [currentPage, setCurrentPage] = useState("Welcome");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Welcome") {
      return <Welcome />;
    }
    if (currentPage === "myProfile") {
      return <Profile />;
    }
    if (currentPage === "myProjects") {
      return <Project />;
    }
    if (currentPage === "findProjects") {
      return <Projects />;
    }
    if (currentPage === "findArrayers") {
      return <Arrayers />;
    }
    if (currentPage === "Requests") {
      return <Requests />;
    }
    return <Welcome />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    /* Wrapping page elements in Router component to keep track of location state */
    <Router>
      <div>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {/* Here we are calling the renderPage method which will return a component  */}
        {/* {renderPage()} */}
        {renderPage()}
        <div className="container">
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route path="/" element={<Welcome />} />
            {/* Define a route that will take in variable data */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
