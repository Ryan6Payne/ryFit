import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../helpers/PrivateRoute'

import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile';
import Register from '../pages/Register/Register';
//import Registergoals from '../pages/Registergoals/Registergoals';
import Registerprof from '../pages/Registerprof/Registerprof';
import Users from '../pages/Users/Users';
import Workout from '../pages/Workout/Workout';
import Workoutcalc from '../pages/Workoutcalc/WorkoutCalc';
import NotFound from '../pages/NotFound/NotFound';

const Routes = ({ userStatus, isAdmin }) => {
    return (
        <Switch>
            <PrivateRoute isLoggedIn={userStatus} exact path="/dashboard" component={Dashboard} />
            <PrivateRoute isLoggedIn={userStatus} exact path="/profile" component={Profile} />
            <PrivateRoute isLoggedIn={isAdmin} exact path="/users" component={Users} />
            <PrivateRoute isLoggedIn={userStatus} exact path="/workout" component={Workout} />
            <PrivateRoute isLoggedIn={userStatus} exact path="/workoutcalc" component={Workoutcalc} />
            <PrivateRoute isLoggedIn={userStatus} exact path="/registerprof" component={Registerprof} />
            {/* <PrivateRoute isLoggedIn={userStatus} exact path="/registergoals" component={Registergoals} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes