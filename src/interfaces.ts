interface Personas {
    name : string;
    age? : number
}

function printName (persona : Personas){
    console.log(persona.name + ' tiene ' + persona.age + ' años');
}

printName({name:'Matt'});