import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
      navigate('/Dashboard');
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required />
        <br /><br />
        <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        <br /><br />
        <button type='submit'>Login</button>
      </form>
      <br />
      <Link to='/'>Main Menu</Link>
    </div>
  );
};

export default Login;