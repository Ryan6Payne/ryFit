import React, { Component } from "react";
import firebaseConfig from "../../config/config";

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebaseConfig.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1> Welcome to your dashboard! </h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
