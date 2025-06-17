import React from 'react';

const Home = () => {
  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  const boxStyle = {
    backgroundColor: 'rgba(230, 244, 249, 0.95)',
    padding: '36px 48px',
    borderRadius: '18px',
    maxWidth: '650px',
    width: '100%',
    boxShadow: '0 3px 10px rgba(38, 70, 83, 0.15)',
    margin: '0 auto',
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '48px',
        color: '#264653',
      }}
    >
      {/* Apresentação */}
      <div style={{ ...boxStyle, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.8rem', marginBottom: '24px' }}>Bem-vinda(o)</h1>
        <p style={{ fontSize: '1.3rem', marginBottom: '36px', lineHeight: 1.6 }}>
          Sou Cecília Costa, psicóloga clínica. Aqui você encontra acolhimento, escuta e cuidado emocional.
        </p>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: '#2a9d8f',
            padding: '14px 28px',
            borderRadius: '10px',
            color: '#e9f1f7',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            transition: 'background-color 0.3s ease',
            display: 'inline-block',
          }}
          onMouseEnter={e => {
            (e.target as HTMLAnchorElement).style.backgroundColor = '#264653';
          }}
          onMouseLeave={e => {
            (e.target as HTMLAnchorElement).style.backgroundColor = '#2a9d8f';
          }}
        >
          Fale comigo no WhatsApp
        </a>
      </div>

      {/* Rodapé */}
      <footer
        style={{
          marginTop: 'auto',
          padding: '24px 20px',
          textAlign: 'center',
          fontSize: '1rem',
          color: '#264653',
          backgroundColor: 'rgba(230, 244, 249, 0.9)',
          borderRadius: '14px',
          maxWidth: '650px',
          boxShadow: '0 2px 8px rgba(38, 70, 83, 0.12)',
          width: '100%',
          userSelect: 'none',
        }}
      >
        <p>Contato: cecilia.costa@email.com | Tel: (99) 99999-9999</p>
        <p>© 2025 Cecília Costa Psicologia</p>
      </footer>
    </div>
  );
};

export default Home;

