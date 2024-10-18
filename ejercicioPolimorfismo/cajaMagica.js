"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CajaMagica = void 0;
var CajaMagica = /** @class */ (function () {
    function CajaMagica() {
        this.habilidades = ["Disparo de hielo que congela", "Flecha de fuego", "disparo con rayo laser"];
    }
    CajaMagica.prototype.abrir = function () {
        var indice = Math.floor(Math.random() * this.habilidades.length);
        return this.habilidades[indice];
    };
    return CajaMagica;
}());
exports.CajaMagica = CajaMagica;
