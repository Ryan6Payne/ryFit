import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import FB from './config/config';
import PrivateRoute from './helpers/PrivateRoute';

//todo: Write a <Route> for each (or a Private Route if logged in)
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Registergoals from './pages/Registergoals/Registergoals';
import Registerprof from './pages/Registerprof/Registerprof';
import Users from './pages/Users/Users';
import Workout from './pages/Workout/Workout';
import Workoutcalc from './pages/Workoutcalc/WorkoutCalc';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <PrivateRoute isLoggedIn={true} exact path="/dashboard" component={Dashboard} />
          <PrivateRoute isLoggedIn={true} exact path="/Profile" component={Profile} />
          <PrivateRoute isLoggedIn={true} exact path="/Users" component={Users} />
          <PrivateRoute isLoggedIn={true} exact path="/Workout" component={Workout} />
          <PrivateRoute isLoggedIn={true} exact path="/Workoutcalc" component={Workoutcalc} />
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
