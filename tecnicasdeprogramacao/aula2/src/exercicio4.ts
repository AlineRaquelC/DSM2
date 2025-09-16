class Carro {
    marca: string = "";
    modelo: string = "";

    setMarca(marca: string): void {
        this.marca = this.marca;
    }

    setModelo(modelo: string): void{
        this.modelo = modelo;
    }

    print(): void {
        console.log(`${this.marca} ${this.modelo}`);
    }
}

const car = new Carro();
car.setModelo("Gol");
car.setMarca("VW");
const car1 = new Carro();
car1.setModelo("Uno");
car1.setMarca("Fiat");
car.print();
car1.print();

