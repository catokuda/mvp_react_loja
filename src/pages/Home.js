import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Bem-vindo à Loja de Acessórios para Gatos!</h1>
      <button onClick={() => navigate('/loja')}>Ir para a Loja</button>
    </div>
  );
};

export default Home;