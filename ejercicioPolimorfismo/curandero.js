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
exports.Curandero = void 0;
var personajes_1 = require("./personajes");
var Curandero = /** @class */ (function (_super) {
    __extends(Curandero, _super);
    function Curandero(nombre, nivel, salud, fuerza, poción) {
        var _this = _super.call(this, nombre, nivel, salud, fuerza) || this;
        _this.poción = poción;
        return _this;
    }
    Curandero.prototype.atacar = function () {
        console.log("".concat(this.nombre, " lanza ").concat(this.poción, " y restaura salud a aliados"));
    };
    Curandero.prototype.defender = function () {
        console.log("".concat(this.nombre, " se protege con escudo m\u00E1gico"));
    };
    return Curandero;
}(personajes_1.Personajes));
exports.Curandero = Curandero;
