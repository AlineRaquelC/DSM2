class Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    print(): void{
        console.log(this.marca, this.modelo, this.ano);
    };
}

class Carro extends Veiculo {
    constructor(marca: string, modelo: string, ano: number, private placa: string) {
        super(marca, modelo, ano); 
        this.placa = placa;
    }

    public print(): void {
        super.print();
        console.log(this.marca, this.modelo, this.ano, this.placa);
    }
}
/**Conceitos presentes:
 * Herança (extends)
 * Construtor filho chamando o construtor pai (super)
 * Sobrescrita de método (print)
 * Modificador private (placa só existe dentro da classe Carro)
 * Polimorfismo em potencial
 */

const car = new Carro("Fiat", "Palio", 2000, "ABC-1234");
car.print();

export { Veiculo, Carro };