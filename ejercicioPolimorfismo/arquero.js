"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
var personajes_1 = require("./personajes");
var cajaMagica_1 = require("./cajaMagica");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, nivel, salud, fuerza, arco) {
        var _this = _super.call(this, nombre, nivel, salud, fuerza) || this;
        _this.arco = arco;
        _this.habilidades = ["Disparo rápido", "Flecha envenenada"];
        return _this;
    }
    Arquero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " dispara flecha con ").concat(this.arco, " Raider, el Asesino y causa ").concat(this.fuerza, " de da\u00F1o"));
    };
    Arquero.prototype.defender = function () {
        console.log("".concat(this.nombre, " se esconde detr\u00E1s de un \u00E1rbol"));
    };
    Arquero.prototype.encontrarCajaMagica = function () {
        var cajaMagica = new cajaMagica_1.CajaMagica();
        var nuevaHabilidad = cajaMagica.abrir();
        this.habilidades.push(nuevaHabilidad);
        console.log("".concat(this.nombre, " ha encontrado una caja m\u00E1gica y ha aprendido ").concat(nuevaHabilidad));
    };
    Arquero.prototype.mostrarHabilidades = function () {
        console.log("".concat(this.nombre, " tiene las siguientes habilidades:"));
        this.habilidades.forEach(function (habilidad) {
            console.log("- ".concat(habilidad));
        });
    };
    return Arquero;
}(personajes_1.Personajes));
exports.Arquero = Arquero;
