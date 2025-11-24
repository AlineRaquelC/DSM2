const nota1 = 7.5;
const nota2 = 8;
const nota3 = 9;

const media = (nota1 + nota2 + nota3) / 3;

console.log("A média do aluno é:", media.toFixed(2));

if (media < 6) {
    console.log("Aluno reprovado...");
} else {
    console.log("Aluno aprovado!");
}
