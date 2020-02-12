import React, { useState } from 'react';
import FB from '../../config/config';

import './Register.scss';
import { Link } from 'react-router-dom';

/* Material-ui imports */
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { history } = props;

  async function fbRegister() {
    try {
      await FB.register(email, password);
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form className="container" onSubmit={e => e.preventDefault() && false}>
      <Paper className="paper" elevation={3}>
        <Typography variant="h4">Register</Typography>
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
          <Button className="button" variant="outlined" color="primary" type="submit" onClick={fbRegister}>
            Register
          </Button>
        </div>
      </Paper>
    </form >
  );
}

export default Register;
