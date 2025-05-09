import { useState } from 'react';

function IncrementorApp({ onBack }) {
  const [count, setCount] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Incrementor App</h2>
      <p>Count: {count}</p>
      <p>Incrementor: {incrementor}</p>

      <button onClick={() => setCount((prev) => prev + incrementor)}>
        Increment Count
      </button>

      <button
        onClick={() => {
          setCount(0);
          setIncrementor((prev) => prev + 1);
        }}
        style={{ marginLeft: '10px' }}
      >
        Reset & Increase Incrementor
      </button>

      <div style={{ marginTop: '20px' }}>
        <button onClick={onBack}>Back</button>
      </div>
    </div>
  );
}

export default IncrementorApp;
