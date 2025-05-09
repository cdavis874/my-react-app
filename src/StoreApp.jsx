import { useEffect, useState } from 'react';

function StoreApp({ onBack }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => res.json())
      .then(setProducts);

    fetch('http://localhost:3001/cart')
      .then((res) => res.json())
      .then(setCart);
  }, []);

  const addToCart = (product) => {
    fetch('http://localhost:3001/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then((res) => res.json())
      .then((newItem) => setCart((prev) => [...prev, newItem]));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Store App (with API)</h2>

      <h3>Products:</h3>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ${product.price.toFixed(2)}{' '}
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h3>Cart ({cart.length} items):</h3>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>
            {item.name} - ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <p><strong>Total:</strong> ${total}</p>

      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default StoreApp;
