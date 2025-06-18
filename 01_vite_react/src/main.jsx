import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

export function InsideApp() {
  return (
    <>
      <h2>Star</h2>
      <p>Inside Star</p>
    </>
  )
}

/* wont work */
// const RactElement = {
//   type: 'a',
//   props: {
// href: 'https://google.com',
// target: '_blank'
//   },
//   children: 'visit google'
// }

// pass an element
const secondElement = (
  <a href="https://google.com" target='_blank'> visit google</a >
)
const user = "this is star"

// create element from react  
const thirdElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click to google',
  user
);

createRoot(document.getElementById('root')).render(
  // <InsideApp />
  // <ReactElement />
  // secondElement
  // thirdElement
  <App />
)