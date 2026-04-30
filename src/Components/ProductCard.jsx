import { useCart } from './CartContext';

function ProductCard({ animal }) {
  const { addToCart } = useCart();

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      width: '100%',
      height: '380px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '100%',
        height: '180px',
        background: '#e8f5e9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#0a3d0a',
        textAlign: 'center',
        padding: '20px'
      }}>
        {animal.name}
      </div>
      <div style={{ padding: '12px' }}>
        <div style={{ color: '#666', fontSize: '12px' }}>Возраст: {animal.age}</div>
        <div style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#2e7d32',
          margin: '8px 0'
        }}>
          {animal.price.toLocaleString()} ₽
        </div>
        <p style={{ color: '#777', fontSize: '12px', margin: '0 0 10px 0' }}>
          {animal.description}
        </p>
        <button 
          onClick={() => addToCart(animal)}
          style={{
            width: '100%',
            padding: '8px',
            background: '#2e7d32',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          В корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;