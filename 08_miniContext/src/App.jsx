import React, { Profiler } from 'react'
import './App.css';
import Login from '../components/Login';
import Profile from '../components/Profile';
import UserContextProvider from '../context/UserContextProvider.jsx';
function App() {
  return (
    <UserContextProvider>
      <h1>Mint gives Freshness</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App