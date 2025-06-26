import './App.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {
  return (
    <UserContextProvider>
      <h1>Mint Give Freshness</h1>
      <div style={{ display: "flex", gap: "8px" }}>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  )
}

export default App