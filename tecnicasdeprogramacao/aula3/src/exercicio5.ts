class Matematica {
    nro: number;

    constructor(nro:number){
        this.nro = nro;
    }
    calcular(): void { }
}
class Multiplicar extends Matematica {

    constructor(nro:number){
        super(nro);
    }
    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} * ${i} = ${this.nro * i}`);
        }
    }
}
class Somar extends Matematica {
    constructor(nro:number){
        super(nro);
    }
    calcular(): void {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.nro} + ${i} = ${this.nro + i}`);
        }
    }
}
/*const a: Matematica = new Somar(5);
a.calcular();
a = new Multiplicar(5);
a.calcular
*/

export {
    Matematica, Multiplicar, Somar
};