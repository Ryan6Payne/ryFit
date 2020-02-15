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

    if (isAuthenticating) { return null }

    return (
        <div>
            <nav>
                <div className="logo"><h4><NavLink exact to="/">RyFit</NavLink></h4></div>
                <ul className="nav-links">
                    {signedIn && <li><NavLink to="/dashboard">Dashboard</NavLink></li>}
                    {signedIn && <li><NavLink to="/workoutcalc" >Workout Calculator</NavLink></li>}
                    {signedIn && <li><NavLink to="/profile" >Profile</NavLink></li>}
                    {signedIn && <li><NavLink to="/users" >Users</NavLink></li>}
                    {!signedIn && <li><NavLink to="/register" >Register</NavLink></li>}
                    {signedIn ? <li onClick={logout}><NavLink to="/">Logout</NavLink></li> : <li><NavLink to="/login" >Login</NavLink></li>}
                </ul>
            </nav>
            <Routes userStatus={signedIn} />
        </div>
    )
}

export default NavBar