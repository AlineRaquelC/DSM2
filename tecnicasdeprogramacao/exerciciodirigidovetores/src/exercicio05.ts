let maior: number = 0;
const numeros: number[] = [];

for (let i = 0; i < 20; i++) {
    numeros[i] = Math.floor(Math.random() * 100 + 1);
    console.log(numeros[i]);
}

for (let i = 0; i < 20; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
}

console.log("O maior número gerado é:", maior);

export {};
