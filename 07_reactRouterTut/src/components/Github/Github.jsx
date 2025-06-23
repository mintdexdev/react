import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

export default function Github() {
  const data = useLoaderData();

  // const [data, setdata] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/mintstardev')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setdata(data)
  //     })
  // }, [])

  return (
    <div
      className='bg-[#121212] text-white text-center text-3xl p-4 w-3/4 m-auto'>
      <img
        className='rounded-full w-24 h-24 mx-auto mb-4'
        src={data.avatar_url} alt="" />
      Github Followers: {data.followers}
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/mintstardev');
  return response.json();
}