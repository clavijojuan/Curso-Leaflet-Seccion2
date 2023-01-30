class Carro {

    llantas = 4;
    motor;
    marca;
    mecanico;
    peso;
    indicador;

    constructor(llantas, motor, marca, mecanico, peso) {
        this.llantas = llantas;
        this.motor = motor;
        this.marca = marca;
        this.mecanico = mecanico;
        this.peso = peso;

        this.calcularIndicador();
    }

    calcularIndicador(){
        this.indicador = this.motor / this.peso
    }
}



const miCarro1 = {
    llantas: 4,
    motor: 1000,
    marca: 'Mazda',
    mecanico: true,
    peso: 500,
    indicador: 1000/500
}

const miCarro2 = {
    llantas: 6,
    motor: 2000,
    marca: 'Toyota',
    mecanico: false,
    peso: 1500,
    indicador: 2000/1500
}


console.log(miCarro1);
console.log(miCarro2);



const instanciaCarro = new Carro(4, 1000, 'Mazda', true, 500);
const instanciaCarro2 = new Carro(6, 2000, 'Toyota', false, 1500);

console.log(instanciaCarro);
console.log(instanciaCarro2);