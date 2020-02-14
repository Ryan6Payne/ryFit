import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Home.scss';

function Home(props) {
  return (
    <div className="container-home">
      <div>
        <h1 className="home-h1">RyFit</h1>
        <div className="inspire">
          <h2>Discover your optimal calorie intake and generate a workout today</h2>
        </div>
        <div className="button-section">
          <Link className="link" to="/register">
            <Button className="button" size="large" variant="outlined" color="primary">
              Sign up here
          </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
