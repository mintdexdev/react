import './App.css'
import Card from './components/Card'
import Trial from './components/Trial'

function App() {
  const someObject = { password: 123 }
  const someArray = [1, 2, 3, 4, 5, 6]
  return (
    <>
      {/* single component */}
      {/* <Trial /> */}
      <Card
        name="star"
        username="starfalldex"
        details={{ name: "star" }}
        objectDetails={someObject}
        arrayDetails={someArray}
      />
      <Card
        name="auronis"
        username="auronisdex"
        details={{ name: "stellar" }}
        objectDetails={someObject}
        arrayDetails={someArray}
      />
      <Card
        details={{ name: "stellar" }}
      />

    </>
  )
}

export default App