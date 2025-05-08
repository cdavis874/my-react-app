import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [prestige, setPrestige] = useState(1);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + prestige)}>
          count is {count}
        </button>
        <button onClick={() => {setCount(0); setPrestige((prestige) => 1 + prestige)}}>
          Incrementor Count is {prestige}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
