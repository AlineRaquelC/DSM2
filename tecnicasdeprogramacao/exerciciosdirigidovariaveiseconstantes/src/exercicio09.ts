let tempF: number = 150;
let tempC: number = ((tempF - 32) / 9) * 5;

const formatar = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 2
});

console.log(`${formatar.format(tempF)}°F = ${formatar.format(tempC)}°C`);

export {};
