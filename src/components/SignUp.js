import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

function Signup() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSignup = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://lingomastersbackend.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });
  
      const data = await response.json();
      
      if (response.ok) {
        setError('');
        navigate('/');
        setIsLoggedIn(true);
      } else {
        // Handle signup error
        setError(data.error || 'Signup failed');
      }
    } catch (error) {
      setError('Something went wrong');
      console.error('Signup Error:', error);
    }
  };  

  return (
    <div className="signup-container">
      <div className="signup-content">
        <form className="signup-form" onSubmit={handleSignup}>
          <h1>Sign Up</h1>
          {error && <p className="error">{error}</p>}
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={username}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />

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

          <button type="submit" className='btn btn-outline-success' >Sign Up</button>
        </form>
        
        <div className="new-to-page">
          <p>Already have an account? <Link to="/login" style={{color: 'green'}}>Login</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
