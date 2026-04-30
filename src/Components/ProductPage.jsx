import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { products } from '../servises/data';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const found = products.find(p => p.id === parseInt(id));
      setProduct(found);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Загрузка...</div>;
  }

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>Товар не найден</div>;
  }

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '16px',
      padding: '30px'
    }}>
      <button onClick={() => navigate(-1)} style={{
        padding: '8px 16px',
        background: '#045a04',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}>← Назад</button>
      
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{
          flex: 1,
          background: '#e8f5e9',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#0a3d0a', marginBottom: '10px' }}>
              {product.name}
            </div>
            <div style={{ fontSize: '18px', color: '#666' }}>{product.category === 'bird' ? 'Птица' : 'Животное'}</div>
          </div>
        </div>
        
        <div style={{ flex: 1 }}>
          <h1 style={{ marginBottom: '15px', fontSize: '28px', color: '#0a3d0a' }}>{product.name}</h1>
          <div style={{ color: '#666', marginBottom: '10px', fontSize: '16px' }}>Возраст: {product.age}</div>
          <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#2d6a2d', marginBottom: '20px' }}>
            {product.price.toLocaleString()} ₽
          </div>
          <p style={{ marginBottom: '20px', lineHeight: 1.6, fontSize: '16px', color: '#555' }}>
            {product.description}
          </p>
          <button onClick={() => addToCart(product)} style={{
            width: '100%',
            padding: '14px',
            background: '#2d6a2d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;