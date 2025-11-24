import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

function isPrimo(n: number): boolean {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

async function main() {
    const resposta = await rl.question("Digite um número inteiro: ");
    let numOriginal = parseInt(resposta);

    console.log(`O número ${numOriginal} ${isPrimo(numOriginal) ? "é" : "não é"} primo.`);

    if (!isPrimo(numOriginal)) {
        console.log("<< Fatorando >>");

        let num = numOriginal;
        const fatores: number[] = [];

        for (let divisor = 2; divisor <= num; divisor++) {
            while (num % divisor === 0) {
                fatores.push(divisor);
                num /= divisor;
            }
        }

        console.log("Fatores primos:", [...new Set(fatores)]);
    }

    rl.close();
}

main();
