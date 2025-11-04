import styled from "styled-components";
import { usePalpite } from "../context/PalpiteContext";
import Layout from "../components/Layout";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

const Container = styled.div`
  text-align: center;

  h2 {
    color: #0b8a44;
    margin-bottom: 20px;
  }

  ul {
    margin-top: 20px;
    text-align: left;
    max-height: 250px;
    overflow-y: auto;
    padding-right: 8px;
  }

  li {
    margin: 6px 0;
    font-size: 1.1rem;
    background: #f4f9f5;
    border-radius: 8px;
    padding: 8px 12px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  }
`;

function Historico() {
  const { historico } = usePalpite();

  return (
    <Layout>
      <FadeIn>
        <Container>
          <h2>Histórico de Palpites</h2>
          {historico.length === 0 ? (
            <p>Nenhum palpite gerado ainda.</p>
          ) : (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {historico.map((p, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {p.join(" - ")}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </Container>
      </FadeIn>
    </Layout>
  );
}

export default Historico;



