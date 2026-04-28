import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Registration from './Components/Registration';
import ProductCard from './Components/ProductCard';
import ProductPage from './Components/ProductPage';
import { products } from './servises/data';
import { useCart, CartProvider } from './Components/CartContext';
import CartModal from './Components/CartModal';

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const { getTotalItems } = useCart();

  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) setIsAuthenticated(true);
  }, []);

  const handleRegisterSuccess = () => setIsAuthenticated(true);
  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsAuthenticated(false);
  };

  // Фильтрация товаров
  const filteredProducts = products.filter(product => {
    if (filter !== 'all' && product.category !== filter) return false;
    if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  if (!isAuthenticated) {
    return <Registration onSuccess={handleRegisterSuccess} />;
  }

  return (
    <div style={{
      maxWidth: '100%',
      margin: '0 auto',
      padding: '20px',
      background: '#f0f4f0',
      minHeight: '100vh'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
        padding: '20px',
        borderRadius: '16px',
        marginBottom: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ margin: 0, color: '#2d6a2d', fontSize: '24px' }}>Наши питомцы</h1>
        </Link>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setShowCart(true)}
            style={{
              padding: '10px 20px',
              background: '#2d6a2d',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#1e4a1e'}
            onMouseLeave={(e) => e.target.style.background = '#2d6a2d'}
          >
            🛒 Корзина ({getTotalItems()})
          </button>
          <button 
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              background: '#045a04',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '500',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#033d03'}
            onMouseLeave={(e) => e.target.style.background = '#045a04'}
          >
            Выйти
          </button>
        </div>
      </div>

      {/* Фильтры и поиск */}
      <div style={{
        display: 'flex',
        gap: '15px',
        marginBottom: '20px',
        flexWrap: 'wrap',
        background: 'white',
        padding: '15px',
        borderRadius: '12px'
      }}>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: '8px 15px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            background: 'white',
            cursor: 'pointer',
            color: '#333',
            fontSize: '14px'
          }}
        >
          <option value="all">Все категории</option>
          <option value="bird">Птицы</option>
          <option value="small">Животные</option>
        </select>

        <input 
          type="text"
          placeholder="Поиск по названию..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '8px 15px',
            borderRadius: '8px',
            border: '1px solid #ddd',
            flex: 1,
            minWidth: '200px',
            background: 'white',
            color: '#333',
            fontSize: '14px'
          }}
        />
        
        {/* Очистить фильтры */}
        {(filter !== 'all' || search) && (
          <button 
            onClick={() => {
              setFilter('all');
              setSearch('');
            }}
            style={{
              padding: '8px 15px',
              borderRadius: '8px',
              border: 'none',
              background: '#045a04',
              color: 'white',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Сбросить
          </button>
        )}
      </div>
      
      <Routes>
        <Route path="/" element={
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '24px',
            justifyContent: 'flex-start'
          }}>
            {filteredProducts.length === 0 ? (
              <div style={{ textAlign: 'center', width: '100%', padding: '50px', color: '#666' }}>
                Товары не найдены
              </div>
            ) : (
              filteredProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                  <ProductCard animal={product} />
                </Link>
              ))
            )}
          </div>
        } />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}
<div className="products-grid">
  {products.map(product => (
    <Link key={product.id} to={`/product/${product.id}`}>
      <ProductCard animal={product} />
    </Link>
  ))}
</div>

export default App;