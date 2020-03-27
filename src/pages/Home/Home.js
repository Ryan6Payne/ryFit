import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import './Home.scss';

function Home(props) {
  return (
    <div className="full-container-home">
      <div className="container-home">
        <div className="home-title">
          <h1 className="home-h1">RyFit</h1>
        </div>
        <div className="content">
          <div className="home-inspire">
            <h2 className="home-h2">Explore your ability. Find out your health statistics and generate a workout today.</h2>
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
    </div>
  )
}

export default Home;
