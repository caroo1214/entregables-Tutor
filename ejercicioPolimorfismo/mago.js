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
exports.Mago = void 0;
var personajes_1 = require("./personajes");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nombre, nivel, salud, fuerza, hechizo) {
        var _this = _super.call(this, nombre, nivel, salud, fuerza) || this;
        _this.hechizo = hechizo;
        return _this;
    }
    Mago.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza ").concat(this.hechizo, "  a Thor y causa ").concat(this.fuerza, " de da\u00F1o"));
    };
    Mago.prototype.defender = function () {
        console.log("".concat(this.nombre, " se protege con su magia"));
    };
    return Mago;
}(personajes_1.Personajes));
exports.Mago = Mago;
