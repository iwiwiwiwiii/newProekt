import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Имитация API запроса
    const loadProduct = async () => {
      try {
        setLoading(true);
        // Здесь будет запрос к API
        const response = await fetch(`/api/products/${id}`);
        // Пока используем мок-данные
        const mockProducts = [
          { id: 1, name: 'Попугай', age: '1 месяц', price: 15000, description: 'Бело-синий попугай. Ручной, говорит привет', image: 'https://via.placeholder.com/400' },
          { id: 2, name: 'Канарейка', age: '3 месяца', price: 1400, description: 'Желтая канарейка. Красиво поет', image: 'https://via.placeholder.com/400' },
        ];
        const found = mockProducts.find(p => p.id === parseInt(id));
        if (found) setProduct(found);
        else setError('Товар не найден');
      } catch (err) {
        setError('Ошибка загрузки');
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', padding: '50px' }}>Загрузка...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>{error}</div>;
  if (!product) return null;

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
        background: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}>← Назад</button>
      
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1 }}>
          <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '12px' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ marginBottom: '15px' }}>{product.name}</h1>
          <div style={{ color: '#666', marginBottom: '10px' }}>Возраст: {product.age}</div>
          <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#2d6a2d', marginBottom: '20px' }}>
            {product.price.toLocaleString()} ₽
          </div>
          <p style={{ marginBottom: '20px', lineHeight: 1.6 }}>{product.description}</p>
          <button onClick={() => addToCart(product)} style={{
            width: '100%',
            padding: '12px',
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