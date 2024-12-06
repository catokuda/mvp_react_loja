import React, { useState } from 'react';
import ProductCard from './ProductCard'; 
import productsData from './data/products.json'; // Exemplo de dados de produtos

const Loja = () => {
  const [cart, setCart] = useState([]);

  // Função para adicionar ao carrinho
  const handleAddToCart = (product) => {
    console.log('Adicionando ao carrinho:', product.name); // Log para verificar que a função foi chamada
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} foi adicionado ao carrinho!`); // Mensagem de sucesso
  };

  const handleOpenModal = (product) => {
    
    // Lógica para abrir o modal 
    console.log('Abrir modal para', product.name);
  };

  return (
    <div>
      <h1>Loja de Produtos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart} 
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>
      <div>
        <h2>Carrinho</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - R$ {item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Loja;
