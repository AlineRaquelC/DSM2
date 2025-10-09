class Numero {
nros: number[] = [];
add(nro: number): void {
//adiciona o nro no final do array
this.nros.push(nro);
}
sum(): number {
let s = 0;
for (let i = 0; i < this.nros.length; i++) {
s += this.nros[i];
}
return s;
}
max() {
let maior = this.nros[0];
for (let i = 0; i < this.nros.length; i++) {
if (this.nros[i] > maior) {
maior = this.nros[i];
}
}
return maior;
}
}

const nros = new Numero ();
nros.add(8);
nros.add(2);
nros.add(9);
nros.add(4);
nros.add(5);
console.log("Somatório:", nros.sum());
console.log("Maior:", nros.max());