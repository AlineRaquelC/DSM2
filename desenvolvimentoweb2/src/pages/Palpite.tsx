import { useEffect, useState } from "react";
import styled from "styled-components";
import { usePalpite } from "../context/PalpiteContext";
import Layout from "../components/Layout";
import FadeIn from "../components/FadeIn";
import { motion } from "framer-motion";

const Container = styled.div`
  text-align: center;

  h2 {
    color: #0b8a44;
    font-size: 1.4rem;
  }

  p {
    margin: 20px 0;
    font-size: 1.5rem;
    letter-spacing: 6px;
    font-weight: 600;
    color: #333;
  }

  button {
    margin: 10px;
    background: linear-gradient(90deg, #0b8a44, #0ecf67);
    border-radius: 12px;
    font-weight: 600;
    box-shadow: 0 4px 10px rgba(11, 138, 68, 0.25);
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.08);
      background: linear-gradient(90deg, #0ecf67, #0b8a44);
    }
  }
`;

function Palpite() {
  const { gerarPalpite } = usePalpite();
  const [palpite, setPalpite] = useState<number[]>([]);

  useEffect(() => {
    setPalpite(gerarPalpite());
  }, []);

  return (
    <Layout>
      <FadeIn>
        <Container>
          <h2>Seu palpite:</h2>
          <motion.p
            key={palpite.join("-")}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            {palpite.join(" - ")}
          </motion.p>
          <button onClick={() => setPalpite(gerarPalpite())}>Nova sugestão</button>
        </Container>
      </FadeIn>
    </Layout>
  );
}

export default Palpite;


