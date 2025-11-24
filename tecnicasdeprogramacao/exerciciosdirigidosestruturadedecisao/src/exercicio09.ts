import readline from "readline";

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Informe o nº do mês (1 a 12):\n", (answer: string) => {
    const mes = parseInt(answer);

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    if (mes >= 1 && mes <= 12) {
        console.log(`O mês correspondente é: ${meses[mes - 1]}`);
    } else {
        console.log("Número inválido! Digite algo entre 1 e 12.");
    }

    leitor.close();
});
