"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, rueda, motor) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.ruedas = rueda;
    }
    // GETTERS
    Auto.prototype.getMotor = function () {
        return this.motor;
    };
    Auto.prototype.getRueda = function () {
        return this.ruedas;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    // SETTERS
    Auto.prototype.setMarca = function (nombre) {
        nombre = "volkswagen gol";
        return nombre;
    };
    Auto.prototype.setMoldelo = function (numero) {
        numero = 2010;
        return numero;
    };
    return Auto;
}());
exports.Auto = Auto;
var miAuto = new Auto("volkswagen gol", 2010, "nafta 2.0", "de caucho");
