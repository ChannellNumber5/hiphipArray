import React from "react";

export default function Welcome() {
  const handleSignUp = () => {};
  // const handleSignUp = () => {handlePageChange("Sign up");};
  const handleLogin = () => {};
  // const handleLogin = () => handlePageChange("Login");
  return (
    <div>
      <h1>Welcome Page</h1>
      <p>
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </p>
    </div>
  );
}
