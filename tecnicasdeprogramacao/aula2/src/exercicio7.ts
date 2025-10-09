class Ponto{
    o:number;
    p:number;

    constructor(o:number, p:number){
        this.o=o;
        this.p=p;
    }

    distancia(p:Ponto):number{
        const dx = (this.o -p.o)** 2;
        const dy = (this.p -p.p)** 2;
        return Math.sqrt(dx + dy);
    }
}

const a = new Ponto(3,5);
const b = new Ponto(1,2);
//observe que passamos como parâmetro um objeto do tipo Ponto
//console.log("Distância:", a.distancia(b));

export default Ponto;