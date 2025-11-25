import {Matematica, Multiplicar, Somar} from "./exercicio5";

class Subtrair extends Matematica {
    constructor(nro:number){
        super(nro);
    }
    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} - ${i} = ${this.nro - i}`);
        }
    }
}

let a: Matematica = new Somar(5);
a.calcular();
a = new Multiplicar(5);
a.calcular();
a = new Subtrair(5);
a.calcular();