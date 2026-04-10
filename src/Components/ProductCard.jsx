// src/Components/ProductCard.jsx
function ProductCard({ animal }) {
  const styles = {
    card: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer'
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover'
    },
    content: {
      padding: '15px'
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '5px'
    },
    price: {
      fontSize: '20px',
      color: '#667eea',
      fontWeight: 'bold',
      marginBottom: '10px'
    },
    age: {
      color: '#666',
      fontSize: '14px',
      marginBottom: '10px'
    },
    description: {
      color: '#888',
      fontSize: '14px',
      marginBottom: '15px'
    },
    button: {
      width: '100%',
      padding: '10px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'transform 0.2s'
    }
  };

  return (
    <div style={styles.card}>
      <img src={animal.image} alt={animal.name} style={styles.image} />
      <div style={styles.content}>
        <div style={styles.name}>{animal.name}</div>
        <div style={styles.age}>🐣 Возраст: {animal.age}</div>
        <div style={styles.price}>{animal.price.toLocaleString()} ₽</div>
        <div style={styles.description}>{animal.description}</div>
        <button 
          style={styles.button}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          🛒 В корзину
        </button>
      </div>
    </div>
  );
}

export default ProductCard;