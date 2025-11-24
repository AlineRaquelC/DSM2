const nomes6: string[] = ["Ana", "Maria", "José", "João", "Alice"];
const notas: number[][] = [[7,8],[9,10],[5,6],[7,9],[8,9]];
const medias: number[] = [];

for (let i = 0; i < notas.length; i++) {
    medias[i] = (notas[i][0] + notas[i][1]) / 2;
}

for (let i = 0; i < nomes6.length; i++) {
    console.log(`Aluno(a): ${nomes6[i]} - Notas: ${notas[i][0]} e ${notas[i][1]} - Média: ${medias[i]}`);
}

export {};
