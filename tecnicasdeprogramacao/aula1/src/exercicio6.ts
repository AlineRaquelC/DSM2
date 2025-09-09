/*function isPar(nro) {
return nro % 2 == 0 ? true : false;
}

const isPar = function(nro) {
return nro % 2 == 0 ? true : false;
}


const isPar = (nro: number) => {
return nro % 2 == 0 ? true : false;
}
*/

const isPar = (nro: number) => nro % 2 == 0 ? true : false;


console.log("Resultado:", isPar(2));
console.log("Resultado:", isPar(3));