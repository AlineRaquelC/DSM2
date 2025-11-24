import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

async function main() {
    const palavra = await rl.question("Digite uma palavra: ");

    let vogais = 0;
    let consoantes = 0;

    for (const letra of palavra.toLowerCase()) {
        if ("aeiou".includes(letra)) vogais++;
        else if (/[a-z]/.test(letra)) consoantes++;
    }

    console.log("Palavra digitada:", palavra);
    console.log("Vogais:", vogais);
    console.log("Consoantes:", consoantes);

    rl.close();
}

main();
