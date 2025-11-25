class Palavra {
    static palavra: string = "";

    static concatenar(item: number | string) {

        if (typeof item === "number") {
            this.palavra += String.fromCharCode(item);
        } else if (typeof item === "string") {
            this.palavra += item;
        }
    }

    static print() {
        console.log(this.palavra);
    }
}

/**Conceitos presentes:
 * static: pertence à classe, não ao objeto.
 * União de tipos (number | string)
 * Funções estáticas
 * Conversão ASCII → caractere (String.fromCharCode())
 */

Palavra.palavra = "Fatec";
Palavra.concatenar("a");
Palavra.concatenar(65);
Palavra.print();

export { Palavra };
