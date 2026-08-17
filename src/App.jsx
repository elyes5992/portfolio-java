import { useState } from 'react'
import reactLogo from './assets/react.svg'

// import './App.css'
import Portfolio from './Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="App">
      <Portfolio />
    </div>
  )
}

export default App
