import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import firebaseConfig from "./config/config";

//todo: Write a <Route> for each (or a Private Route if logged in)
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Registergoals from "./pages/Registergoals/Registergoals";
import Registerprof from "./pages/Registerprof/Registerprof";
import Users from "./pages/Users/Users";
import Workout from "./pages/Workout/Workout";
import Workoutcalc from "./pages/Workoutcalc/Workoutcalc";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebaseConfig.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  //todo: re-write auth function elsewhere & use it to determine routing
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App">
            {this.state.user ? <Dashboard /> : <Login />}
          </div>

          {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
