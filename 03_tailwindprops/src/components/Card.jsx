import React from 'react'

function Card({ name, username = "crimsonwhite", arrayDetails }) {

  return (
    <div className="mx-auto my-4 max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="https://images.pexels.com/photos/19557629/pexels-photo-19557629.jpeg"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {name || "crimson"}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
      </div>
      <p className="text-gray-300">
        {arrayDetails} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
        amet
      </p>
    </div>
  )
}

export default Card