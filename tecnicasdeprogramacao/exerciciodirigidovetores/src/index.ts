const numeros: number[] = [];
const cidades: string[] = [];
const estados: string[] = Array(4);

numeros[0] = 10;
numeros[1] = 5;
numeros[2] = 1;

cidades[0] = "São Paulo";
cidades[1] = "Rio de Janeiro";

estados[0] = "SP";
estados[1] = "RJ";

const vetor: number[] = [];
for (let x = 0; x < 5; x++) {
    vetor[x] = x;
}

const cidades2: string[] = ["São Paulo", "Rio de Janeiro", "Salvador", "Belo Horizonte", "Porto Alegre"];

for (let i = 0; i < cidades2.length; i++) {
    console.log("Gostaria de visitar a cidade:", cidades2[i]);
}

const capitais = [
    "São Paulo", "SP",
    "Curitiba", "PR",
    "Porto Alegre", "RS",
    "Salvador", "BA"
];

const funcionarios: (string | number)[] = ["Junior", 1, "Vivian", 3, "Sonia", 8];

console.log(capitais[0][0]);

export {};
