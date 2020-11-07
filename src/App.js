import {useState, useEffect} from 'react'
import Form from './Form';
const { default: Canvas } = require("./Canvas");
const { default: Header } = require("./Header");

function App() {
  const [monster, setMonster] = useState({})

  useEffect(()=> {
    setMonster(
      {size: 1, numOfEyes: 2, numOfLegs: 2}
    )
  }, [])

  function createMonster(newMonster) {
    setMonster(newMonster)
  }
  return(
    <div className="App">
      <Header />
      <Form updateMonster={createMonster}/>
      <Canvas monster={monster}/>
    </div>
  )
}

export default App;

