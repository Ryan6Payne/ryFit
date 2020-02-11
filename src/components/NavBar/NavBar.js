import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FB from '../../config/config'
import Routes from '../../helpers/Routes'
import './NavBar.scss'

const NavBar = ({ history }) => {
    const [signedIn, setSignedIn] = useState(false)
    const [isAuthenticating, setIsAuthenticating] = useState(true)


    useEffect(() => {
        FB.auth.onAuthStateChanged(user => {
            if (user) {
                setSignedIn(true)
                setIsAuthenticating(false)
            } else {
                setIsAuthenticating(false)
            }
        })
    }, [])

    async function logout() {
        await FB.logout()
        setSignedIn(false)
    }

    return (
        <div>
            <div className="NavBar">
                <ul>
                    <li><NavLink exact to="/" activeClassName="active" className="nav-links">Home</NavLink></li>
                    {signedIn && <li><NavLink to="/Dashboard" activeClassName="active" className="nav-links">Dashboard</NavLink></li>}
                    {signedIn && <li><NavLink to="/Workoutcalc" activeClassName="active" className="nav-links">Workout Calculator</NavLink></li>}
                    {signedIn && <li><NavLink to="/Profile" activeClassName="active" className="nav-links">Profile</NavLink></li>}
                    {signedIn && <li><NavLink to="/Users" activeClassName="active" className="nav-links">Users</NavLink></li>}
                    {!signedIn && <li><NavLink to="/Register" activeClassName="active" className="nav-links">Register</NavLink></li>}
                    {signedIn ? <button type="submit" onClick={logout}>Log Out</button> : <li><NavLink to="/Login" activeClassName="active" className="nav-links">Login</NavLink></li>}
                </ul>
            </div>
            <Routes userStatus={signedIn} />
        </div>
    )
}

export default NavBar