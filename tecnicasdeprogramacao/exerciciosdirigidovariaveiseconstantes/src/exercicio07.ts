let eleitores: number = 20000;
let brancos: number = 1500;
let nulos: number = 500;
let validos: number = 18000;

const percentual = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2
});

console.log(`Quantidade de eleitores: ${eleitores}`);
console.log(`Votos brancos: ${brancos} - ${percentual.format(brancos / eleitores)}`);
console.log(`Votos nulos: ${nulos} - ${percentual.format(nulos / eleitores)}`);
console.log(`Votos válidos: ${validos} - ${percentual.format(validos / eleitores)}`);

export {};
