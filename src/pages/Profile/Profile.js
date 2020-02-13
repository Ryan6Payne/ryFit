import React, { Component } from "react";
import FB from '../../config/config'

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Welcome {FB.getUsername()}!</h1>
        <h1>Profile</h1>
        <p>This page will include:</p>
        <ul>
          <li>A pic the user uploads or a default one</li>
          <li>Detail updating area</li>
          <li>Previous workout entries</li>
          <li>a button to load a popout with all previous generated workouts</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
