import { useState, useEffect } from 'react'
import './App.css'
import Registration from './Components/Registration'
import ProductCard from './Components/ProductCard'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    const user = localStorage.getItem('currentUser')
    if (user) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleRegisterSuccess = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setIsAuthenticated(false)
  }


  if (isAuthenticated) {
    return (
      <div className="app">
        <div className="header">
          <h1>🐾 ZooMarket</h1>
          <button onClick={handleLogout} className="logout-btn">
            Выйти
          </button>
        </div>
        <div className="products-container">
          <h2>Наши животные</h2>
          <div className="products-grid">
            {products.map(animal => (
              <ProductCard key={animal.id} animal={animal} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Registration onSuccess={handleRegisterSuccess} />
    </div>
  )
}

export default App