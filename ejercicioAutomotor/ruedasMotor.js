"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rueda = exports.Motor = void 0;
var Motor = /** @class */ (function () {
    function Motor(tipo, color) {
        this.tipo = tipo;
        this.color = color;
    }
    return Motor;
}());
exports.Motor = Motor;
var Rueda = /** @class */ (function () {
    function Rueda(color, material) {
        this.color = color;
        this.material = material;
    }
    return Rueda;
}());
exports.Rueda = Rueda;
