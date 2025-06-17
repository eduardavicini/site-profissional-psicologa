import React from 'react';

const Home = () => {
  // Tipar os objetos de estilo para evitar erros TS
  const boxStyle: React.CSSProperties = {
    backgroundColor: 'rgba(230, 244, 249, 0.95)', // azul muito claro translúcido
    padding: '36px 48px',
    borderRadius: '18px',
    maxWidth: '900px',
    width: '100%',
    boxShadow: '0 3px 10px rgba(38, 70, 83, 0.15)',
    margin: '40px auto',
    color: '#264653',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '32px',
  };

  const textStyle: React.CSSProperties = {
    flex: '1 1 350px',
    minWidth: '280px',
    fontSize: '1.15rem',
    lineHeight: 1.6,
  };

  const imgStyle: React.CSSProperties = {
    flex: '1 1 300px',
    minWidth: '280px',
    borderRadius: '14px',
    objectFit: 'cover',
    boxShadow: '0 4px 12px rgba(38,70,83,0.2)',
    maxWidth: '400px',
    width: '100%',
  };

  return (
    <div
      style={{
        backgroundColor: '#f0f0f0', // fundo cinza neutro claro
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
    >
      {/* Sobre mim */}
      <section style={boxStyle}>
        <div style={textStyle}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '20px' }}>Sobre mim</h2>
          <p style={{ marginBottom: '16px' }}>
            Psicóloga formada com paixão pelo cuidado integral do ser humano, atuo ajudando pessoas a se conhecerem melhor, 
            enfrentarem suas dificuldades emocionais e conquistarem mais qualidade de vida.
          </p>
          <p>
            Minha abordagem é humanizada, acolhedora e personalizada, respeitando o tempo e as necessidades de cada paciente.
            Estou pronta para caminhar junto com você nessa jornada de autoconhecimento e cura.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Foto Sobre mim Cecília Costa"
          style={imgStyle}
        />
      </section>

      {/* Depoimentos */}
      <section
        style={{
          backgroundColor: 'rgba(230, 244, 249, 0.95)',
          padding: '36px 48px',
          borderRadius: '18px',
          maxWidth: '650px',
          width: '100%',
          boxShadow: '0 3px 10px rgba(38, 70, 83, 0.15)',
          margin: '40px auto',
          color: '#264653',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '28px', fontSize: '2.2rem' }}>Depoimentos</h2>
        <blockquote
          style={{
            fontStyle: 'italic',
            borderLeft: '5px solid #2a9d8f',
            paddingLeft: '18px',
            marginBottom: '26px',
            maxWidth: '550px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
            fontSize: '1.1rem',
          }}
        >
          “O atendimento da Cecília me ajudou a encontrar equilíbrio e força para enfrentar desafios.”
          <br />
          <strong>- João S.</strong>
        </blockquote>
        <blockquote
          style={{
            fontStyle: 'italic',
            borderLeft: '5px solid #2a9d8f',
            paddingLeft: '18px',
            maxWidth: '550px',
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: '1.6',
            fontSize: '1.1rem',
          }}
        >
          “Muito acolhedora e profissional. Recomendo para quem busca apoio emocional.”
          <br />
          <strong>- Maria L.</strong>
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
