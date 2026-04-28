import { useCart } from '../Components/CartContext'  // ← ../Components/CartContext

function ProductCard({ animal }) {
  const { addToCart } = useCart();

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      width: '250px',
      flexShrink: 0,
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
            objectFit: 'contain',
            objectPosition: 'center'
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