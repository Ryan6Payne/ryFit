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
            <h2 className="home-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius mauris in orci cursus ornare. Pellentesque pharetra urna arcu, eu vehicula justo tincidunt non. </h2>
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
