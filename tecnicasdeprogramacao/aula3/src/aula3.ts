class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
    imprimir(): void {
        console.log(`${this.nome} - ${this.idade}`);
    }
}
class Cliente extends Pessoa {
    saldo: number;
    constructor(nome: string, idade: number, saldo: number) {
        super(nome, idade);
        this.saldo = saldo;
    }
    print(): void {
        this.imprimir();
        super.imprimir();
        console.log(`${this.nome} - ${this.idade} - ${this.saldo}`);
    }
}
const c = new Cliente("Ana", 18, 980);
c.print();
