import React from 'react';

const bannerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',      
  backgroundColor: '#f8f8f8',
  padding: '15px 20px', 
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  height: '80px', 
  zIndex: '1000', 
  width: '100%',
  boxSizing: 'border-box', 
};

const logoStyle = {
  height: '50px', 
  width: 'auto',
  backgroundImage: 'url(/src/assets/logo.png)', 
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
};

const navLinksStyle = {
  display: 'flex',
  gap: '20px',
  margin: '0',
  padding: '0',
  listStyle: 'none', 
  alignItems: 'center', 
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: 'bold',
};

const searchContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const searchInputStyle = {
  height: '30px',
  width: '200px', 
  padding: '0 10px',
  border: '1px solid #ccc',
  borderRadius: '20px',
  fontSize: '14px',
  outline: 'none',
};

const App = () => {
  return (
    <div style={bannerStyle}>
      <div style={logoStyle} />
      <div style={navLinksStyle}>
        <a href="#" style={linkStyle}>Comida fav</a>
        <a href="#" style={linkStyle}>Gustos musicales</a>
        <a href="#" style={linkStyle}>Hobbies</a>
        <a href="#" style={linkStyle}>Habilidades</a>
      </div>
      <div style={searchContainerStyle}>
        <input type="search" placeholder="Buscar..." style={searchInputStyle} />
      </div>
    </div>
  );
};

export default App;
