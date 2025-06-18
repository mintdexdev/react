import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  const increaseCounter = () => {
    /*
    counter value will be 1 step behind
    because state change are asynchronous
    */
    if (counter < 20) {
      setCounter(counter + 1)
      console.log("clicked", counter)
    }
  }
  const decreaseCounter = () => {
    /* to immediately use vale make a copy first */
    if (counter > 0) {
      let count = counter;
      count--;
      setCounter(count)
      console.log("clicked", count)
    }
  }

  return (
    <>
      <h1>Starfall  in React</h1>
      <h2>counter value: {counter}</h2>

      <button
        onClick={increaseCounter}
      >Increase Count</button>
      <button
        onClick={decreaseCounter}
      >Decrease Count</button>

      <footer>counter here too: {counter} </footer>
    </>
  )
}

export default App
