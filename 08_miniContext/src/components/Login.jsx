import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  }

  const formStyle = {
    backgroundColor: "#121212",
    width: "fit-content",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    border: "1px solid #ffffff38",
    borderRadius: "10px",
  }
  return (
    <div style={formStyle}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        ype="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

      <button
        type="submit"
        onClick={handleSubmit}
      >Login</button>
    </div>
  )
}

export default Login