import Carro from "./exercicio04";

class Car {
    private static contador = 0; 
    private _marca = "";
    private _modelo = "";

    constructor(marca:string, modelo:string){
        this._marca = marca;
        this._modelo = modelo;
        Car.contador++;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(marca: string) {
        this._marca = marca;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(modelo: string) {
        this._modelo = modelo;
    }

    static getContador():number{
        return Car.contador;
    }
}

const x = new Car("VW","Gol");
const y = new Car("Fiat","Uno");
const z = new Car("GM","Corsa");

console.log("Nº de objetos Car criados: ",Car.getContador());
