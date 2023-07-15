import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating login logic
    if (email === 'kkamakshiojha@gmail.com' && password === 'komal') {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
      alert("Incorrect password or Email");
    }

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <h1>Login to Bookcove</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      {loggedIn && <p>Login successful!</p>}
    </div>
  );
}

export default LoginPage;
