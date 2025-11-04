import { createContext, useContext, useState, ReactNode } from "react";

interface PalpiteContextType {
  historico: number[][];
  gerarPalpite: () => number[];
}

const PalpiteContext = createContext<PalpiteContextType | undefined>(undefined);

export const PalpiteProvider = ({ children }: { children: ReactNode }) => {
  const [historico, setHistorico] = useState<number[][]>([]);

  const gerarPalpite = () => {
    const numeros = Array.from({ length: 60 }, (_, i) => i + 1);
    const sorteados: number[] = [];

    while (sorteados.length < 6) {
      const idx = Math.floor(Math.random() * numeros.length);
      sorteados.push(...numeros.splice(idx, 1));
    }

    const novoPalpite = sorteados.sort((a, b) => a - b);
    setHistorico((prev) => [...prev, novoPalpite]);
    return novoPalpite;
  };

  return (
    <PalpiteContext.Provider value={{ historico, gerarPalpite }}>
      {children}
    </PalpiteContext.Provider>
  );
};

export const usePalpite = () => {
  const context = useContext(PalpiteContext);
  if (!context) throw new Error("usePalpite deve ser usado dentro de PalpiteProvider");
  return context;
};
