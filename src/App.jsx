import { useState } from 'react';
import './App.css';
import TicTacToe from './TicTacToe';
import IncrementorApp from './IncrementorApp';

function App() {
  const [currentApp, setCurrentApp] = useState(null);

  const goHome = () => setCurrentApp(null);

  return (
    <div>
      <h1>My React Playground</h1>

      {!currentApp && (
        <>
          <button onClick={() => setCurrentApp('incrementor')}>
            Open Incrementor App
          </button>
          <button
            onClick={() => setCurrentApp('tictactoe')}
            style={{ marginLeft: '10px' }}
          >
            Play Tic Tac Toe
          </button>
        </>
      )}

      {currentApp === 'incrementor' && <IncrementorApp onBack={goHome} />}
      {currentApp === 'tictactoe' && <TicTacToe onBack={goHome} />}
    </div>
  );
}

export default App;
