import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://lingomastersbackend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setError('');
        navigate('/');
        setIsLoggedIn(true);
      } else {
        // Handle login error
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Something went wrong');
      console.error('Login Error:', error);
    }
  };  

  return (
    <div className="login-container">
      <div className="login-content">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />

          <button type="submit" className='btn btn-outline-success'>Login</button>
        </form>

        <div className="new-to-page">
          <p>Don't have an account? <Link to="/signup" style={{color: 'green'}}>Register</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
