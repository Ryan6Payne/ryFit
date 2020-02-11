import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../helpers/PrivateRoute'

import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
// import Registergoals from '../pages/Registergoals/Registergoals';
// import Registerprof from '../pages/Registerprof/Registerprof';
import Users from '../pages/Users/Users';
import Workout from '../pages/Workout/Workout';
import Workoutcalc from '../pages/Workoutcalc/Workoutcalc';
import NotFound from '../pages/NotFound/NotFound';

const Routes = ({ userStatus }) => {
    return (
        <Switch>
            <PrivateRoute isLoggedIn={userStatus} exact path="/dashboard" component={Dashboard} />
            <PrivateRoute isLoggedIn={userStatus} exact path="/Profile" component={Profile} />
            <PrivateRoute isLoggedIn={userStatus} exact path="/Users" component={Users} />
            <PrivateRoute isLoggedIn={userStatus} exact path="/Workout" component={Workout} />
            <PrivateRoute isLoggedIn={userStatus} exact path="/Workoutcalc" component={Workoutcalc} />
            <Route exact path="/" component={Home} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes