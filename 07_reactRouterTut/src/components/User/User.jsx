import React from 'react'
import { useParams } from 'react-router'

function User() {

  const { userId } = useParams()

  return (
    <div className='bg-[#121212] text-white text-center text-3xl p-4 w-3/4 m-auto'>
      Username: {userId}
      </div>
  )
}

export default User