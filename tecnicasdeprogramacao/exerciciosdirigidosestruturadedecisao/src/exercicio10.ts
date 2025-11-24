import readline from "readline";

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const percentual = new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
});

const formatar = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
});

const legendas = ["o nome do funcionário", "a categoria", "o salário"];
const dados: string[] = [];
let i = 0;

function perguntar() {
    leitor.question(`Informe ${legendas[i]}: `, (answer: string) => {
        dados[i] = answer.trim();
        i++;

        if (i < 3) {
            perguntar();
        } else {
            console.log("\n>>> Dados do Funcionário <<<");
            console.log(`Nome: ${dados[0]}`);

            const categoria = dados[1].toUpperCase();
            const salario = parseFloat(dados[2]);
            let perc = 0;

            switch (categoria) {
                case "A":
                case "C":
                case "F":
                case "H":
                    perc = 0.10;
                    break;
                case "B":
                case "D":
                case "E":
                case "I":
                case "J":
                case "T":
                    perc = 0.15;
                    break;
                case "K":
                case "R":
                    perc = 0.25;
                    break;
                case "L":
                case "M":
                case "N":
                case "O":
                case "P":
                case "Q":
                case "S":
                    perc = 0.35;
                    break;
                case "U":
                case "V":
                case "X":
                case "Y":
                case "W":
                case "Z":
                    perc = 0.50;
                    break;
                default:
                    console.log("Categoria inválida!");
                    leitor.close();
                    return;
            }

            const reajuste = salario * perc;
            const novosalario = salario + reajuste;

            console.log("Categoria................:", categoria);
            console.log("Percentual de Reajuste...:", percentual.format(perc));
            console.log("(+) Salário Atual........:", formatar.format(salario));
            console.log("(+) Reajuste.............:", formatar.format(reajuste));
            console.log("(=) Salário Novo.........:", formatar.format(novosalario));

            leitor.close();
        }
    });
}

perguntar();
