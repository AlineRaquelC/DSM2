import { Link } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import FadeIn from "../components/FadeIn";

const Container = styled.div`
  text-align: center;

  h2 {
    font-size: 1.4rem;
    color: #0b8a44;
    margin-bottom: 20px;
  }

  button {
    margin-top: 20px;
    background: linear-gradient(90deg, #0b8a44, #0ecf67);
    font-weight: 600;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(11, 138, 68, 0.25);
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  p {
    margin-top: 20px;
  }
`;

function Home() {
  return (
    <Layout>
      <FadeIn>
        <Container>
          <h2>Bem-vindo ao gerador de palpites da Mega-Sena 🍀</h2>
          <button>
            <Link to="/palpite" style={{ color: "white" }}>
              Clique para começar
            </Link>
          </button>
          <p>
            <Link to="/palpite">Gerar palpite</Link> |{" "}
            <Link to="/historico">Ver histórico</Link>
          </p>
        </Container>
      </FadeIn>
    </Layout>
  );
}

export default Home;


