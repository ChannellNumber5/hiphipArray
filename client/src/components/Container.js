import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import NavTabs from "../components/NavTabs";
import Welcome from "./pages/Welcome";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/myProfile";
import Project from "./pages/myProjects";
import Search from "./pages/search";
import Requests from "./pages/requests";
import CreateProfile from "./pages/CreateProfile";
import CreateProject from "./pages/CreateProject";

export default function Container() {
  return (
    <Router>
      <div>
        <NavTabs></NavTabs>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route
            path="/Project" // for user's projects
            element={<Project />}
          />
          <Route path="Search" element={<Search />} />
          <Route path="Requests" element={<Requests />} />
          <Route path="CreateProfile" element={<CreateProfile />} />
        </Routes>
      </div>
    </Router>
  );
}
