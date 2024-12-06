import React from 'react';

const Header = () => {
  return (
    <header style={headerStyles}>
      <div style={logoStyles}>
        <img 
          src="/public/logo.png" 
          alt="Logo da Loja" 
          style={{ width: '150px', height: 'auto' }}
        />
      </div>

      <nav style={navStyles}>

        {/* Links de ancoragem que rolam suavemente para as seções */}
        <a href="#loja" style={linkStyles}>Loja</a>
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

export default Header;
