const numint: number[] = Array(20);

for (let x = 0; x < 20; x++) {
    numint[x] = Math.floor(Math.random() * 100 + 1);
}

console.log("Vetor original:");
console.log(numint);

numint.sort((a, b) => a - b);

console.log("Vetor ordenado:");
console.log(numint);

export {};
