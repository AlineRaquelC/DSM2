import readline from "readline";

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite o nome do time?\n", (answer: string) => {
    const timefut = answer;

    switch (timefut) {
        case "Flamengo":
        case "Fluminense":
        case "Vasco":
        case "Botafogo":
            console.log("É um time carioca.");
            break;
        case "São Paulo":
        case "Palmeiras":
        case "Santos":
        case "Corinthians":
            console.log("É um time paulista.");
            break;
        default:
            console.log("É de outro estado.");
    }

    leitor.close();
});
