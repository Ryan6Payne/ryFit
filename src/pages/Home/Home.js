import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>This page will include:</p>
        <ul>
          <li>Overview of RyFit</li>
          <li>Central register/login component</li>
          <li>Unable to go to this page if logged in, will redirect to dashboard</li>
        </ul>
      </div>
    );
  }
}

export default Home;
