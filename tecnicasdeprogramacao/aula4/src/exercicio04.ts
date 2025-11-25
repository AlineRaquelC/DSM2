class Carro {
    static getContador(): any {
        throw new Error("Method not implemented.");
    }

    constructor(private _marca: string, private _modelo: string) {
    }

    get marca(): string {
        return this._marca;
    }

    get modelo(): string {
        return this._modelo;
    }

}

export default Carro;


