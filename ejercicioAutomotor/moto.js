"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
var Moto = /** @class */ (function () {
    function Moto(marca, modelo, motor, ruedas) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.ruedas = ruedas;
    }
    // getters
    Moto.prototype.getMarca = function () {
        return this.marca;
    };
    Moto.prototype.getModelo = function () {
        return this.modelo;
    };
    Moto.prototype.getMotor = function () {
        return this.motor;
    };
    Moto.prototype.getRuedas = function () {
        return this.ruedas;
    };
    // setters
    Moto.prototype.setMarca = function (nombre) {
        nombre = "Honda nx400";
        return nombre;
    };
    Moto.prototype.setModelo = function (numero) {
        numero = 2017;
        return numero;
    };
    return Moto;
}());
exports.Moto = Moto;
var moto = new Moto("Honda nx400", 2010, "cilindrada de 397.2 cc", "de caucho");
