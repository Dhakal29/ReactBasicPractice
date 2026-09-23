import { useState } from 'react';

// 1. Array of data objects
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
  { title: 'Banana', isFruit: true, id: 4 },
];

export default function ShoppingList() {
  // 2. State for toggling between all items and fruits only
  const [showFruitsOnly, setShowFruitsOnly] = useState(false);

  // 3. Conditional data filtering based on state
  const displayedProducts = showFruitsOnly
    ? products.filter(product => product.isFruit)
    : products;

  return (
    <div
      style={{
        margin: '24px auto',
        padding: '20px 24px',
        maxWidth: '360px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '16px',
        border: '1px solid var(--border)',
        textAlign: 'left',
      }}
    >
      <h3 style={{ margin: '0 0 16px', color: 'var(--text-h)' }}>
        Shopping List 🛒
      </h3>

      {/* 4. Button practicing conditional button text and state update */}
      <button
        type="button"
        className="counter"
        onClick={() => setShowFruitsOnly(!showFruitsOnly)}
      >
        {showFruitsOnly ? 'Show All Products' : 'Show Fruits Only 🍎'}
      </button>

      {/* 5. Rendering the list using .map() */}
      <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0' }}>
        {displayedProducts.map(product => (
          <li
            key={product.id}
            style={{
              padding: '10px 14px',
              margin: '8px 0',
              borderRadius: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              // 6. Conditional color: magenta for fruits, green for vegetables
              color: product.isFruit ? '#e066ff' : '#4ade80',
              fontWeight: 500,
            }}
          >
            <span>{product.title}</span>

            {/* 7. Conditional badge using ternary operator */}
            <span
              style={{
                fontSize: '12px',
                padding: '2px 8px',
                borderRadius: '12px',
                background: product.isFruit
                  ? 'rgba(224, 102, 255, 0.15)'
                  : 'rgba(74, 222, 128, 0.15)',
              }}
            >
              {product.isFruit ? 'Fruit' : 'Vegetable'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
