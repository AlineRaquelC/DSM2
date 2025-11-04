import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactNode } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(180deg, #e7f9ee 0%, #ffffff 100%);
`;

const Header = styled.header`
  background-color: #0b8a44;
  color: white;
  padding: 16px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 1.6rem;
    margin-bottom: 8px;
    font-weight: 600;
  }

  nav a {
    color: white;
    margin: 0 12px;
    font-weight: 500;
    font-size: 0.95rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
  padding: 40px 30px;
  width: 100%;
  max-width: 400px;
  text-align: center;
  animation: fadeIn 0.4s ease-in;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <Header>
        <h1>Mega Sena App</h1>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/palpite">Palpite</Link>
          <Link to="/historico">Histórico</Link>
        </nav>
      </Header>
      <Main>
        <Card>{children}</Card>
      </Main>
    </Wrapper>
  );
}

export default Layout;
