let salario: number = 5000;
let perc: number = 0.05;

let reajuste: number = salario * perc;
let novosalario: number = salario + reajuste;

const percentual = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 2
});

const formatar = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

console.log("Percentual de reajuste:", percentual.format(perc));
console.log("Salário atual:", formatar.format(salario));
console.log("Reajuste:", formatar.format(reajuste));
console.log("Novo salário:", formatar.format(novosalario));

export {};
