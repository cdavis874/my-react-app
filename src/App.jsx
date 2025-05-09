import { useState } from 'react';
import './App.css';
import TicTacToe from './TicTacToe';
import StoreApp from './StoreApp';

function App() {
  const [currentApp, setCurrentApp] = useState(null);
  const goHome = () => setCurrentApp(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>My React Playground</h1>

      {!currentApp && (
        <>
          <button onClick={() => setCurrentApp('incrementor')}>
            Open Incrementor App
          </button>
          <button onClick={() => setCurrentApp('tictactoe')} style={{ marginLeft: '10px' }}>
            Play Tic Tac Toe
          </button>
          <button onClick={() => setCurrentApp('store')} style={{ marginLeft: '10px' }}>
            Visit Store
          </button>
        </>
      )}

      {currentApp === 'incrementor' && <IncrementorApp onBack={goHome} />}
      {currentApp === 'tictactoe' && <TicTacToe onBack={goHome} />}
      {currentApp === 'store' && <StoreApp onBack={goHome} />}
    </div>
  );
}

export default App;
