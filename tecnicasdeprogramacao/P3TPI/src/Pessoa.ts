export class Pessoa {
    nome: string;
    email: string;
    nasc: Date;

    constructor(nome: string, email: string, nasc: Date) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    imprimir(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`e-Mail: ${this.email}`);
        console.log(
            `Data Nasc.: ${this.nasc.toLocaleDateString('pt-BR', {
                timeZone: 'UTC',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            })}`
        );

        console.log(`Idade: ${this.idade()} anos`);
        console.log(`Faixa Etária: ${this.faixaEtaria()}`);
        console.log(`Anos Bissextos: ${this.numBissextos()}`);
    }

    idade(): number {
        const hoje = new Date();

        let idade = hoje.getFullYear() - this.nasc.getFullYear();

        const fezAniversario =
            hoje.getMonth() > this.nasc.getMonth() ||
            (hoje.getMonth() === this.nasc.getMonth() &&
                hoje.getDate() >= this.nasc.getDate());

        if (!fezAniversario) {
            idade--;
        }

        return idade;
    }

    numBissextos(): number {
        let count = 0;

        const anoNasc = this.nasc.getFullYear();
        const hoje = new Date();
        const anoAtual = hoje.getFullYear();

        const fezAniversario =
            hoje.getMonth() > this.nasc.getMonth() ||
            (hoje.getMonth() === this.nasc.getMonth() &&
                hoje.getDate() >= this.nasc.getDate());

        for (let ano = anoNasc; ano < anoAtual; ano++) {
            const ehBissexto =
                ano % 400 === 0 ||
                (ano % 4 === 0 && ano % 100 !== 0);

            // Se for o ano atual e a pessoa ainda NÃO fez aniversário, não conta
            if (ano === anoAtual && !fezAniversario) continue;

            if (ehBissexto) count++;
        }

        return count;
    }

    faixaEtaria(): string {
        const idade = this.idade();

        if (idade < 13) return "Criança";
        if (idade < 18) return "Adolescente";
        if (idade < 60) return "Adulto";
        if (idade < 100) return "Idoso";
        return "Matusalém";
    }
}
