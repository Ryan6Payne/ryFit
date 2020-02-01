import React, { useState } from 'react';
import FB from '../../config/config';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { history } = props;

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={e => e.preventDefault() && false}>
        <div>
          <label for="email">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter your E-mail Address"
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
        </div>
        <div>
          <button type="submit" onClick={fbLogin}>
            Log In
          </button>
        </div>
      </form>
    </div>
  );

  async function fbLogin() {
    try {
      await FB.login(email, password);
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  }
}
