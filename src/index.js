import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Caso tenha um arquivo CSS, mantenha a importação.
import App from './App'; // Importa o componente principal do projeto.

const root = ReactDOM.createRoot(document.getElementById('root')); // Define o ponto de entrada no DOM.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
