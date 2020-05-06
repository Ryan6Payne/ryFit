import React, { useState } from 'react';
import FB from '../../config/config';
import './Login.scss';
import { Link } from 'react-router-dom';

/* Material-ui imports */
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { history } = props;

  async function fbLogin() {
    try {
      await FB.login(email, password);
      history.push('/dashboard');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className="container-login" onSubmit={e => e.preventDefault() && false}>
      <Paper className="paper" elevation={20}>
        <Typography variant="h4">Login</Typography>
        <div className="inputs">
          <TextField className="TextField"
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your E-mail Address"
          />
          <TextField className="TextField"
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
        </div>
        <div className="buttons">
          <Button className="button" variant="outlined" color="primary" type="submit" onClick={fbLogin}>
            Log In
          </Button>
          <p className="spacer"></p>
          <Link className="link" to="/register">
            <Button className="button" variant="outlined" color="secondary">
              Register
          </Button>
          </Link>
        </div>
      </Paper>
    </form >
  );
}

export default Login
