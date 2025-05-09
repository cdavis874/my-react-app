import { useState } from 'react';

const products = [
  { id: 1, name: 'T-Shirt', price: 19.99 },
  { id: 2, name: 'Coffee Mug', price: 9.99 },
  { id: 3, name: 'Notebook', price: 5.49 },
];

function StoreApp({ onBack }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Store App</h2>

      <h3>Products:</h3>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <strong>{product.name}</strong> - ${product.price.toFixed(2)}{' '}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h3>Cart ({cart.length} items):</h3>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>

      <p><strong>Total:</strong> ${total}</p>

      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default StoreApp;
