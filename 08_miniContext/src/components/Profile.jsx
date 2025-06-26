import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
  const { user } = useContext(UserContext)

  if (!user) return <div>Please Login</div>
  return (
    <h3>Profile {user.username}</h3>
  )
}

export default Profile