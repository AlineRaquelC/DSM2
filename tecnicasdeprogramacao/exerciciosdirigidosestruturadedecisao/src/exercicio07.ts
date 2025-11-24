import readline from "readline";

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const lados: number[] = [];
let i = 0;

function perguntar() {
    leitor.question(`Informe comprimento do ${i + 1}º lado: `, (answer: string) => {
        lados[i] = parseFloat(answer);
        i++;

        if (i < 3) {
            perguntar();
        } else {
            console.log("\n>>> Medidas do Triângulo <<<");
            console.log("1º lado:", lados[0]);
            console.log("2º lado:", lados[1]);
            console.log("3º lado:", lados[2]);

            const [a, b, c] = lados;

            if (a < b + c && b < a + c && c < a + b) {
                if (a === b && b === c) {
                    console.log("É um triângulo equilátero.");
                } else if (a === b || a === c || b === c) {
                    console.log("É um triângulo isósceles.");
                } else {
                    console.log("É um triângulo escaleno.");
                }
            } else {
                console.log("Os comprimentos informados não formam um triângulo!");
            }

            leitor.close();
        }
    });
}

perguntar();
