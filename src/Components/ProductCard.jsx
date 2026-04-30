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
        background: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={animal.image} 
          alt={animal.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/250x180?text=No+Image';
          }}
        />
      </div>
      <div style={{ padding: '12px' }}>
        <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{animal.name}</h3>
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