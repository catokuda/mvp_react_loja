import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isOpen, onRequestClose, product }) => {
  if (!product) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          maxWidth: '500px',
          margin: 'auto',
          borderRadius: '10px',
          padding: '20px',
          backgroundColor: 'white',  // fundo branco
          position: 'relative', 
          zIndex: 1000, // Garantindo que o modal fique acima de outros elementos
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor do fundo escurecido atrás do modal
          zIndex: 999, // Garantindo que o fundo escurecido também tenha prioridade
        },
      }}
    >
      {/* Nome do Produto */}      
      <h2>{product.name}</h2>

      {/* Imagem do Produto */}
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', objectFit: 'contain' }}
      />

      {/* Descrição do Produto */}
      <p>{product.description}</p>

      {/* Preço */}
      <p>
        <strong>Preço:</strong> R$ {product.price.toFixed(2)}
      </p>

      {/* Botão de Fechar */}
      <button
        style={{
          padding: '10px 15px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={onRequestClose}
      >
        Fechar
      </button>
    </ReactModal>
  );
};

export default Modal;
