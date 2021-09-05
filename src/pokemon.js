var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pokemon = /** @class */ (function () {
    /* static movimiento:string = 'Impactrueno' */
    function Pokemon(nombre) {
        this.nombre = 'Mew';
        this.nombre = nombre;
    }
    Pokemon.prototype.escribeTipo = function () {
        console.log(this.nombre + ' es de tipo ' + Pokemon.tipo);
    };
    Pokemon.tipo = 'Eléctrico';
    return Pokemon;
}());
var pikachu = new Pokemon('Pikachu');
pikachu.escribeTipo();
var Electrico = /** @class */ (function (_super) {
    __extends(Electrico, _super);
    function Electrico() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Electrico.prototype.escribeTipo = function () {
        console.log(' es solo de tipo eléctrico');
        _super.prototype.escribeTipo.call(this);
    };
    return Electrico;
}(Pokemon));
var electabuzz = new Electrico('Electabuzz');
electabuzz.escribeTipo();
