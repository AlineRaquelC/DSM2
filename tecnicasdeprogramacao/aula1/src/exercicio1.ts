console.log("Arquivo exercicio1.ts rodou!");
function somar(a: number, b:number): number | string {
if( a < b ){
return a + b; //somar
}
else{
return "" + a + b; //concatenar
}
}

const r = somar (1,2);
console.log("Resultado:", somar(1,2));
console.log("Resultado:", somar(5,3));
