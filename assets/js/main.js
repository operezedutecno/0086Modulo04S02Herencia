// Definición con ES5
// function Equipo(serial, marca, modelo) {
//     this.serial = serial
//     this.marca = marca
//     this.modelo = modelo

//     this.mostrarDatos = function() {
//         return `Serial: ${this.serial}, Marca: ${this.marca}, Modelo: ${this.modelo}`
//     }
// }


// Definición con ES6
class Equipo {

    constructor(serial, marca, modelo) {
        this.serial = serial
        this.marca = marca
        this.modelo = modelo
    }

    mostrarDatos() {
        return `Serial: ${this.serial}, Marca: ${this.marca}, Modelo: ${this.modelo}`
    }

}

// const equipo1 = new Equipo("123456","HP","HP001")
// console.log(equipo1.mostrarDatos());

class Teclado extends Equipo {
    constructor(serial, marca, modelo, tipo = "Alámbrico") {
        super(serial, marca, modelo)
        this.tipo = tipo
    }

    mostrarDatos() {
        return `Serial: ${this.serial}, Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo: ${this.tipo}`
    }
}

const equipo2 = new Teclado("654321", "Microsoft", "MIC001")
console.log(equipo2.mostrarDatos());


class Disco extends Equipo {
    constructor(serial, marca, modelo, capacidad) {
        super(serial, marca, modelo)
        this.capacidad = capacidad
    }
}

const disco1 = new Disco("987654","WD", "WD001", "1TB")
console.log(disco1.mostrarDatos());
console.log(disco1);