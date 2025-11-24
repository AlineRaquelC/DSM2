let A: number = 10;
let B: number = 20;
let C: number;

C = A;
A = B;
B = C;

console.log("Valor final de A:", A);
console.log("Valor final de B:", B);

export {};
