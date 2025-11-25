import { Pessoa } from "./Pessoa";

export class Cliente extends Pessoa {
    saldo: number;

    constructor(nome: string, email: string, nasc: Date, saldo: number) {
        super(nome, email, nasc);
        this.saldo = saldo;
    }

    imprimir(): void {
        super.imprimir();

        console.log(
            `Saldo: ${this.saldo.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}`
        );

        console.log(""); // apenas uma linha em branco para separar os clientes
    }
}
