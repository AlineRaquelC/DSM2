const vetor: number[] = [];

for (let x = 0; x < 5; x++) {
    vetor[x] = Math.floor(Math.random() * 100 + 1);
}

console.log("Quarto elemento:", vetor[3]);

export {};
