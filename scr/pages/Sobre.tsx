import React from 'react';

const Home = () => {
  const boxStyle: React.CSSProperties = {
    backgroundColor: 'rgba(245, 247, 250, 0.95)', // azul claríssimo quase branco
    padding: '36px 30px',
    borderRadius: '20px',
    maxWidth: '900px',
    width: '100%',
    boxShadow: '0 8px 24px rgba(32, 54, 102, 0.12)', // sombra suave e ampla
    margin: '48px auto',
    color: '#1a2e57',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '28px',
    flexDirection: 'row',
    justifyContent: 'center',
    transition: 'box-shadow 0.3s ease',
  };

  const textStyle: React.CSSProperties = {
    flex: '1 1 320px',
    minWidth: '280px',
    fontSize: '1.1rem',
    lineHeight: 1.7,
    fontWeight: 400,
    color: '#2a3a66',
  };

  const imgStyle: React.CSSProperties = {
    flex: '1 1 320px',
    maxWidth: '420px',
    borderRadius: '16px',
    objectFit: 'cover',
    boxShadow: '0 8px 28px rgba(26, 46, 87, 0.22)',
    transition: 'transform 0.3s ease',
  };

  const sectionStyle: React.CSSProperties = {
    backgroundColor: 'rgba(245, 247, 250, 0.95)',
    padding: '34px 28px',
    borderRadius: '20px',
    maxWidth: '700px',
    width: '100%',
    boxShadow: '0 6px 20px rgba(32, 54, 102, 0.10)',
    margin: '40px auto',
    color: '#1a2e57',
    fontWeight: 400,
  };

  const sectionTitleStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: '28px',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#183060',
    letterSpacing: '0.04em',
  };

  const blockquoteStyle: React.CSSProperties = {
    fontStyle: 'italic',
    borderLeft: '5px solid #183060',
    paddingLeft: '18px',
    maxWidth: '560px',
    marginLeft: 'auto',
    marginRight: 'auto',
    lineHeight: 1.7,
    fontSize: '1.05rem',
    color: '#394d7a',
    marginBottom: '30px',
  };

  return (
    <div
      style={{
        backgroundColor: '#f8fafc', // fundo quase branco azulado
        minHeight: '100vh',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        fontFamily:
          "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      }}
    >
      {/* Sobre mim */}
      <section style={boxStyle}>
        <div style={textStyle}>
          <h2
            style={{
              fontSize: '2.4rem',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: 700,
              color: '#183060',
              letterSpacing: '0.04em',
            }}
          >
            Sobre mim
          </h2>
          <p style={{ marginBottom: '16px', textAlign: 'justify' }}>
            Psicóloga formada com paixão pelo cuidado integral do ser humano, atuo ajudando pessoas a se conhecerem melhor,
            enfrentarem suas dificuldades emocionais e conquistarem mais qualidade de vida.
          </p>
          <p style={{ textAlign: 'justify' }}>
            Minha abordagem é humanizada, acolhedora e personalizada, respeitando o tempo e as necessidades de cada paciente.
            Estou pronta para caminhar junto com você nessa jornada de autoconhecimento e cura.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
          alt="Foto Sobre mim Cecília Costa"
          style={imgStyle}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </section>

      {/* Depoimentos */}
      <section style={sectionStyle}>
        <h2 style={sectionTitleStyle}>Depoimentos</h2>

        <blockquote style={blockquoteStyle}>
          “O atendimento da Cecília me ajudou a encontrar equilíbrio e força para enfrentar desafios.”
          <br />
          <strong>- João S.</strong>
        </blockquote>
        <blockquote style={blockquoteStyle}>
          “Muito acolhedora e profissional. Recomendo para quem busca apoio emocional.”
          <br />
          <strong>- Maria L.</strong>
        </blockquote>
        <blockquote style={blockquoteStyle}>
          “A Cecília é uma profissional incrível, que realmente escuta e entende nossas dificuldades.”
          <br />
          <strong>- Ana P.</strong>
        </blockquote>
        <blockquote style={blockquoteStyle}>
          “Com o apoio dela, consegui dar passos importantes na minha jornada de autoconhecimento.”
          <br />
          <strong>- Lucas M.</strong>
        </blockquote>
        <blockquote style={blockquoteStyle}>
          “Ambiente acolhedor e atendimento personalizado. Super recomendo!”
          <br />
          <strong>- Fernanda R.</strong>
        </blockquote>
      </section>
    </div>
  );
};

export default Home;
