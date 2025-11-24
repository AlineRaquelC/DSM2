const num: number[] = Array(30);
let maior = 0;
let menor = 100;
let posmaior = 0;
let posmenor = 0;

for (let x = 0; x < 30; x++) {
    num[x] = Math.floor(Math.random() * 100 + 1);

    if (num[x] > maior) {
        maior = num[x];
        posmaior = x;
    }

    if (num[x] < menor) {
        menor = num[x];
        posmenor = x;
    }
}

console.log("<< Vetor Gerado >>");
console.log(num);

console.log(`Maior número: ${maior} (posição ${posmaior})`);
console.log(`Menor número: ${menor} (posição ${posmenor})`);

export {};
