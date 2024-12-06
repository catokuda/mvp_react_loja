import React, { useState } from 'react';
import products from './data/products.json';
import ProductCard from './components/ProductCard';
import Modal from './components/Modal';

// Componente Header
const Header = () => {
  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <img
          src="./logo.png"
          alt="Logo da Loja"
          style={{ width: '150px', height: 'auto' }}
        />
      </div>
      <nav style={navStyles}>
        
        {/* Links de ancoragem que rolam suavemente para as seções */}
        <a href="#introduction" style={linkStyles}>Início</a>
        <a href="#shop" style={linkStyles}>Loja</a>
        <a href="#contato" style={linkStyles}>Contato</a>
      </nav>
    </header>
  );
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
};

const logoStyles = {
  display: 'flex',
  alignItems: 'center',
};

const navStyles = {
  display: 'flex',
  gap: '20px',
};

const linkStyles = {
  textDecoration: 'none',
  color: '#333',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',
};

// Componente Principal (App.js)
const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Header com navegação */}
      <Header />

      {/* Seção de Introdução */}
      <section
        id="introduction"
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f7f7f7',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <h1>Bem-vindo à Nossa Loja de Acessórios para Gatos!</h1>
        <p>Explore produtos incríveis para o seu amigo felino.</p>
        <button
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
          onClick={() => {
            document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Ver Produtos
        </button>
      </section>

      {/* Seção da Loja */}
      <section
        id="shop"
        style={{
          padding: '40px',
          backgroundColor: '#fff',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Nossos Produtos</h2>
        
        {/* Exibe os cards de produtos */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </section>

      {/* Modal para detalhes do produto */}
      <Modal
        isOpen={!!selectedProduct}
        onRequestClose={handleCloseModal}
        product={selectedProduct}
      />
    </div>
  );
};

export default App;
