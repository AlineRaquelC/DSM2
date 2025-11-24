import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

let numeros: number[] = [];

async function perguntar() {
    while (numeros.length < 10) {
        const resposta = await rl.question(`Digite o ${numeros.length + 1}º número (1 a 100): `);
        const num = parseInt(resposta);

        if (isNaN(num) || num < 1 || num > 100) {
            console.log("Número inválido. Tente novamente.");
            continue;
        }

        if (numeros.includes(num)) {
            console.log("Número já informado. Digite outro.");
            continue;
        }

        numeros.push(num);
    }

    const menor = Math.min(...numeros);
    const maior = Math.max(...numeros);
    const soma = numeros.reduce((a, b) => a + b, 0);
    const ordenados = [...numeros].sort((a, b) => a - b);

    console.log("\nMenor:", menor);
    console.log("Maior:", maior);
    console.log("Somatório:", soma);
    console.log("Ordenados:", ordenados);

    rl.close();
}

perguntar();
