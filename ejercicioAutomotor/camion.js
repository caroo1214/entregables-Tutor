"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
var Camion = /** @class */ (function () {
    function Camion(marca, modelo, motor, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.ruedas = ruedas;
    }
    // getters
    Camion.prototype.getMarca = function () {
        return this.marca;
    };
    Camion.prototype.getModelo = function () {
        return this.modelo;
    };
    Camion.prototype.getMotor = function () {
        return this.motor;
    };
    Camion.prototype.getRuedas = function () {
        return this.ruedas;
    };
    // setters
    Camion.prototype.setMarca = function (nombre) {
        nombre = "mercedes benz 1634";
        return nombre;
    };
    Camion.prototype.setModelo = function (numero) {
        numero = 2016;
        return numero;
    };
    return Camion;
}());
exports.Camion = Camion;
var camion = new Camion("mercedes benz 1634", 2016, "diesel cuatro tiempos 6c en linea", "de caucho");
