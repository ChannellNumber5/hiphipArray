import React from "react";

const styles = {
  headerStyle: {
    background: "black",
    width: "100%",
  },
  headingStyle: {
    fontSize: "50px",
    color: "#2D9BF0",
  },
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>hiphip ARRAY[]</h1>
    </header>
  );
}

export default Header;
