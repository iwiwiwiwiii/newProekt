function AboutPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', background: 'white', borderRadius: '16px', padding: '30px' }}>
      <h1 style={{ marginBottom: '20px', color: '#2d6a2d' }}>О нас</h1>
      <div style={{ lineHeight: 1.8 }}>
        <p>Добро пожаловать в наш магазин</p>
        <p>Продаем животных в хорошие руки</p>
        <h2 style={{ margin: '20px 0 10px', color: '#2d6a2d' }}>Контакты</h2>
        <p>Телефон: +7 (953) 359-11-58</p>
        <p>Email: zoomarket@mail.com</p>
        <p>г Санкт-Петербург улица Советская</p>
      </div>
    </div>
  );
}

export default AboutPage;