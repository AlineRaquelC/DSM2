const conta = (x: number, y: number) =>
    x == y ? x * y : "" + (x - y);

const a:number|string = conta(4,2);
console.log(a,typeof(a));
/**Conceitos presentes:
 *Função arrow
 União de tipos
 Conversão implícita para string
 Operador ternário
 */