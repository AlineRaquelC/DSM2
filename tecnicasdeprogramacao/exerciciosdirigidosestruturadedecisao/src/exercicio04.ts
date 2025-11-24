import readline from "readline";

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe sua idade:\n", (answer: string) => {
    const idade = parseInt(answer);
    let cat = "";

    if (idade <= 10) {
        cat = "Criança";
    } else if (idade <= 13) {
        cat = "Pré-Adolescente";
    } else if (idade <= 17) {
        cat = "Adolescente";
    } else if (idade <= 59) {
        cat = "Adulto";
    } else {
        cat = "Idoso";
    }

    console.log(`Para a idade de ${idade} anos, a pessoa é considerada: ${cat}`);

    leitor.close();
});
