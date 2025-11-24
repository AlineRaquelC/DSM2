import readline from "readline";

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const legendas = ["eleitores", "votos brancos", "votos nulos", "votos válidos", "votos obtidos"];
const votos: number[] = [];
let i = 0;

const percentual = new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
});

function perguntar() {
    leitor.question(`Informe o total de ${legendas[i]}: `, (answer: string) => {
        votos[i] = parseInt(answer);
        i++;

        if (i < 5) {
            perguntar();
        } else {
            console.log("\n>>> Resultado das Eleições <<<");
            console.log(`Quantidade de eleitores.: ${votos[0]}`);
            console.log(`Votos brancos...........: ${votos[1]} - ${percentual.format(votos[1] / votos[0])}`);
            console.log(`Votos nulos.............: ${votos[2]} - ${percentual.format(votos[2] / votos[0])}`);
            console.log(`Votos válidos...........: ${votos[3]} - ${percentual.format(votos[3] / votos[0])}`);
            console.log(`Votos obtidos...........: ${votos[4]} - ${percentual.format(votos[4] / (votos[3] + votos[1]))}`);

            console.log(
                "Candidato:",
                votos[4] / (votos[3] + votos[1]) >= 0.1 ? "Eleito!" : "Não foi eleito..."
            );

            leitor.close();
        }
    });
}

perguntar();
