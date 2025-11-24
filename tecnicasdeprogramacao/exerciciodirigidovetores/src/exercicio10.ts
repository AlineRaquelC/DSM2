import readline from "readline";

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Digite a quantidade de elementos da matriz quadrada: ", (answer) => {

    const e = Number(answer);

    const matriz: number[][] = [];

    for (let x = 0; x < e; x++) {
        const linha: number[] = [];
        for (let y = 0; y < e; y++) {
            linha.push(Math.floor(Math.random() * 100 + 1));
        }
        matriz.push(linha);
    }

    console.log("<< Matriz Original >>");
    console.table(matriz);

    const primeiraLinha = [...matriz[0]];

    for (let x = 0; x < e; x++) {
        for (let y = 0; y < e; y++) {
            matriz[x][y] += primeiraLinha[y];
        }
    }

    console.log("<< Matriz Somada com a 1ª Linha >>");
    console.table(matriz);

    leitor.close();
});
