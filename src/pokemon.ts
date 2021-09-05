class Pokemon {
    nombre : string = 'Mew';
    static tipo :string = 'Eléctrico'
    /* static movimiento:string = 'Impactrueno' */

    constructor(nombre : string){
        this.nombre = nombre
    }

    escribeTipo(){
        console.log(this.nombre + ' es de tipo ' + Pokemon.tipo)
    }
}

var pikachu = new Pokemon('Pikachu');
pikachu.escribeTipo()

class Electrico extends Pokemon {
    escribeTipo(){
        console.log(' es solo de tipo eléctrico')
        super.escribeTipo()
    }
}

var electabuzz = new Electrico('Electabuzz')
electabuzz.escribeTipo()