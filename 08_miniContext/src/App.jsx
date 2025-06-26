import React from 'react'
import './App.css'
import UserContextProvider from './context/UserContextprovider'
import Login from './components/Login'
import Profile from './components/profile'

function App() {
  return (
    <UserContextProvider>
      <h1>Mint give freshness</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App