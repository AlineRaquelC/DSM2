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

leitor.question("Informe seu salário R$:\n", (answer: string) => {
    const salario = parseFloat(answer);
    let perc = 0;

    if (salario <= 650) {
        perc = 0.1;
    } else {
        perc = 0.05;
    }

    const reajuste = salario * perc;
    const novosalario = salario + reajuste;

    console.log("Percentual de Reajuste....:", percentual.format(perc));
    console.log("(+) Salário Atual.........:", formatar.format(salario));
    console.log("(+) Reajuste..............:", formatar.format(reajuste));
    console.log("(=) Salário Novo..........:", formatar.format(novosalario));

    leitor.close();
});
