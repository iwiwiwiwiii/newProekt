import { useCart } from "./CartContext";

function CartModal({ onClose }) {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleOrder = () => {
    alert(`Заказ оформлен! Сумма: ${getTotalPrice().toLocaleString()} ₽`);
    clearCart();
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }} onClick={onClose}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '20px',
        maxWidth: '500px',
        width: '90%',
        maxHeight: '80%',
        overflow: 'auto'
      }} onClick={e => e.stopPropagation()}>
        <h2 style={{ margin: '0 0 20px 0' }}>Корзина</h2>
        
        {cart.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px',
                borderBottom: '1px solid #ddd'
              }}>
                <img 
                  src={item.image} 
                  alt={item.name}
                  style={{ width: '50px', height: '50px', objectFit: 'contain' }}
                />
                <div style={{ flex: 1 }}>
                  <div><strong>{item.name}</strong></div>
                  <div>{item.price.toLocaleString()} ₽</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{ padding: '5px 10px', cursor: 'pointer' }}
                  >-</button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{ padding: '5px 10px', cursor: 'pointer' }}
                  >+</button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: '5px 10px',
                    background: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >Удалить</button>
              </div>
            ))}
            <div style={{
              marginTop: '20px',
              paddingTop: '10px',
              borderTop: '2px solid #ddd',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
              Итого: {getTotalPrice().toLocaleString()} ₽
            </div>
            <button 
              onClick={handleOrder}
              style={{
                width: '100%',
                padding: '12px',
                background: '#2e7d32',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                marginTop: '20px',
                fontWeight: 'bold'
              }}
            >
              Оформить заказ
            </button>
          </>
        )}
        
        <button 
          onClick={onClose}
          style={{
            width: '100%',
            padding: '10px',
            background: '#999',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}

export default CartModal;