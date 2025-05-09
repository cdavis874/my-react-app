import { useState } from 'react';
import './App.css';
import TicTacToe from './TicTacToe';

function App() {
  const [count, setCount] = useState(0);
  const [prestige, setPrestige] = useState(1);
  const [showGame, setShowGame] = useState(false);

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

      <div className="TicTacToe">
        {!showGame ? (
          <button onClick={() => setShowGame(true)}>
            Start Tic Tac Toe Game
          </button>
        ) : (
          <TicTacToe />
        )}
      </div>
    </>
  )
}

export default App
 