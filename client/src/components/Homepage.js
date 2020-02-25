import React, { Component } from "react";
import { Link } from "react-router-dom";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1>IronProfile</h1>
        <p>Today we will create an app</p>
        <Link to="/Signup/" style={{ textDecoration: "none" }}>
          <button>Sign up</button>
        </Link>
        <Link to="/Login/" style={{ textDecoration: "none" }}>
          <button>Log in</button>
        </Link>
      </div>
    );
  }
}

export default Homepage;
