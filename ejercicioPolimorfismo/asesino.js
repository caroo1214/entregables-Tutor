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
exports.Asesino = void 0;
var personajes_1 = require("./personajes");
var Asesino = /** @class */ (function (_super) {
    __extends(Asesino, _super);
    function Asesino(nombre, nivel, salud, fuerza, veneno) {
        var _this = _super.call(this, nombre, nivel, salud, fuerza) || this;
        _this.veneno = veneno;
        return _this;
    }
    Asesino.prototype.atacar = function () {
        console.log("".concat(this.nombre, " ataca con daga envenenada ").concat(this.veneno, " al Arquero Charles y causa ").concat(this.fuerza, " de da\u00F1o"));
    };
    Asesino.prototype.defender = function () {
        console.log("".concat(this.nombre, " se hace invisible"));
    };
    return Asesino;
}(personajes_1.Personajes));
exports.Asesino = Asesino;
