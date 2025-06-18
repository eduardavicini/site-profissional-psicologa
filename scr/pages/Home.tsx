import React from 'react';

const Home = () => {
  const backgroundImageUrl =
    'https://images.unsplash.com/photo-1504194008492-c55ffe34e18d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // Responsividade
  const isMobile = window.innerWidth <= 480;

  const containerStyle: React.CSSProperties = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: isMobile ? '30px 15px' : '80px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '30px' : '60px',
    color: '#264653',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    overflowX: 'hidden',
    textShadow: '0 1px 3px rgba(255,255,255,0.85)',
  };

  const boxStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: isMobile ? '25px 20px' : '40px 50px',
    borderRadius: '20px',
    maxWidth: '700px',
    width: '100%',
    boxShadow: '0 8px 24px rgba(38, 70, 83, 0.2)',
    border: '1px solid rgba(38, 70, 83, 0.15)',
  };

  const headingStyle = {
    fontWeight: '700',
    marginBottom: isMobile ? '18px' : '25px',
    color: '#1b2a41',
  };

  const subtitleStyle = {
    fontWeight: '500',
    fontSize: isMobile ? '1rem' : '1.15rem',
    lineHeight: 1.7,
    color: '#3b4a59',
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: '#264653',
    color: '#e9f1f7',
    padding: isMobile ? '12px 28px' : '14px 36px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: isMobile ? '1rem' : '1.15rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textDecoration: 'none',
    display: 'inline-block',
    marginTop: isMobile ? '20px' : '30px',
    boxShadow: '0 5px 15px rgba(38, 70, 83, 0.3)',
  };

  const buttonHoverStyle: React.CSSProperties = {
    backgroundColor: '#1b374a',
  };

  // Para o efeito hover no botão via estado
  const [hover, setHover] = React.useState(false);

  return (
    <div style={containerStyle}>
      {/* Apresentação */}
      <section style={boxStyle}>
        <h1 style={{ ...headingStyle, fontSize: isMobile ? '1.8rem' : '2.8rem' }}>
          Bem-vinda(o)
        </h1>
        <p style={subtitleStyle}>
          Sou <strong>Cecília Costa</strong>, psicóloga clínica. Aqui você encontra acolhimento, escuta e cuidado emocional em um ambiente seguro e acolhedor.
        </p>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...buttonStyle,
            ...(hover ? buttonHoverStyle : {}),
            userSelect: 'none',
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Fale comigo no WhatsApp
        </a>
      </section>

      {/* Abordagem */}
      <section style={boxStyle}>
        <h2 style={{ ...headingStyle, fontSize: isMobile ? '1.4rem' : '2rem' }}>Minha Abordagem</h2>
        <p style={subtitleStyle}>
          Trabalho com a abordagem <strong>psicanalítica</strong>, que investiga os processos inconscientes e a história de vida para promover autoconhecimento e transformação emocional profunda. Aqui, cada paciente é único, e o cuidado é personalizado para suas necessidades.
        </p>
      </section>

      {/* Rodapé */}
      <footer
        style={{
          marginTop: '40px',
          padding: '20px 15px',
          textAlign: 'center',
          fontSize: isMobile ? '0.8rem' : '1rem',
          color: '#264653',
          backgroundColor: 'rgba(255,255,255,0.85)',
          borderRadius: '14px',
          maxWidth: '700px',
          width: '100%',
          boxShadow: '0 4px 12px rgba(38, 70, 83, 0.1)',
          border: '1px solid rgba(38, 70, 83, 0.1)',
          userSelect: 'none',
        }}
      >
        <p>Contato: cecilia.costa@email.com | Tel: (99) 99999-9999</p>
        <p>© 2025 Cecília Costa Psicóloga</p>
      </footer>
    </div>
  );
};

export default Home;
