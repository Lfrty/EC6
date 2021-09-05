var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.porDos = function (num) {
            return num * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
/// <reference path="multiplicacion.ts" />
var use = new Utility.useful();
console.log(use.porDos(5));
