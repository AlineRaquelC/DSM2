import Point from "./exercicio7.js"

class Rectangle{
    inferiorEsquerdo: Point;
    superiorDireito: Point;

    constructor (ie:Point, sd:Point){
        this.inferiorEsquerdo= ie;
        this.superiorDireito=sd;
    }

    area():number {
        const infDir = new Point(this.superiorDireito.o, this.inferiorEsquerdo.o);
        const base = this.inferiorEsquerdo.distancia(infDir);
        const altura = this.superiorDireito.distancia(infDir);
        return base*altura;

    }
}

const sd = new Point(3,5);
const ie = new Point(1,2);
//observe que o construtor da classe Rectangle
//recebe dois objetos do tipo Point como parâmetro
const r = new Rectangle(ie,sd);
console.log("Área:", r.area());