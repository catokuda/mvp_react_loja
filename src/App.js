import React, { useState } from 'react';
import products from './data/products.json';
import ProductCard from './components/ProductCard';
import Modal from './components/Modal';
import Header from './componentes/Header';


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
