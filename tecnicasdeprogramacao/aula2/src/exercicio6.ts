class Operacao {
    k:number;
    l:number;

    constructor(k:number, l: number){
        this.k= k;
        this.l= l;
    }

    somar():number{
        return this.k + this.l;
    }

    subtrair():number{
        return this.k - this.l;
    }

    dividir():number{
        return this.k / this.l;
    }
}

const op = new Operacao(3,5);
console.log("Soma:", op.somar());
console.log("Diferença:", op.subtrair());
console.log("Divisão:", op.dividir());