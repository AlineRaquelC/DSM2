class Instrumento {
    tipo: string;
    protected cordas: boolean;

    constructor(tipo: string, cordas: boolean) {
        this.tipo = tipo;
        this.cordas = cordas;
    }

    getCordas():boolean{
        return this.cordas;
    }

    public print(): void {
        console.log(this.tipo, this.cordas?"com cordas" : "sem cordas");
    }
}

const p = new Instrumento("Violão", true);

/**Conceitos presentes:
 * Protected >só pode ser acessado de dentro:
 * da classe
 * da subclasses não pode ser acessado fora delas
 * Métodos públicos
 */

console.log(p.tipo); // Violão
p.print(); // Violão com cordas
console.log(p.getCordas()); // Erro: 'cordas' é protegido e só pode ser acessado dentro da classe Instrumento e suas subclasses