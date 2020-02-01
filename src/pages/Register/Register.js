import React, { useState } from 'react';
import FB from '../../config/config';

function Register(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { history } = props;

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={e => e.preventDefault() && false}>
        <div>
          <label for="email">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter an E-Mail Address"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter a password"
          />
        </div>
        <div>
          <button type="submit" onClick={fbRegister}>
            Register
          </button>
        </div>
      </form>
    </div>
  );

  async function fbRegister() {
    try {
      await FB.register(email, password);
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  }
}

export default Register;
