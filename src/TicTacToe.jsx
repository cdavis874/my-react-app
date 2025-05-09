import { useState } from 'react';

function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '60px',
        height: '60px',
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '2px',
      }}
    >
      {value}
    </button>
  );
}

function Board({ squares, onSquareClick }) {
  const renderSquare = (i) => (
    <Square value={squares[i]} onClick={() => onSquareClick(i)} />
  );

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div style={{ display: 'flex' }}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div style={{ display: 'flex' }}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function TicTacToe({ onBack }) {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : squares.includes(null)
    ? `Next Player: ${xIsNext ? 'X' : 'O'}`
    : 'Draw!';

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tic Tac Toe</h2>
      <p>{status}</p>
      <Board squares={squares} onSquareClick={handleClick} />
      <div style={{ marginTop: '10px' }}>
        <button onClick={resetGame}>Restart Game</button>
        <button onClick={onBack} style={{ marginLeft: '10px' }}>
          Back
        </button>
      </div>
    </div>
  );
}

function calculateWinner(sq) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
      return sq[a];
    }
  }
  return null;
}

export default TicTacToe;
