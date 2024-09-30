"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Automotor = void 0;
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var Automotor = /** @class */ (function () {
    function Automotor(marca, modelo, auto, moto, camion) {
        if (auto === void 0) { auto = []; }
        if (moto === void 0) { moto = []; }
        if (camion === void 0) { camion = []; }
        this.auto = [];
        this.moto = [];
        this.camion = [];
        this.marca = marca;
        this.modelo = modelo;
        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
    }
    // public agregarAuto(marca: string, modelo:string, auto:string, moto: string, camion:string): void{
    //     let AutoMotor: Auto = new Auto (marca, modelo, auto, moto, camion);
    //     if(!this.auto)
    // }
    Automotor.prototype.getMarca = function () {
        return this.marca;
    };
    Automotor.prototype.getModelo = function () {
        return this.modelo;
    };
    return Automotor;
}());
exports.Automotor = Automotor;
var primerVehiculo = new auto_1.Auto("volkswagen gol", 2010, "nafta 2.0", "de caucho");
var segundoVehiculo = new moto_1.Moto("Honda nx400", 2010, "cilindrada de 397 cc", "de caucho");
var tercerVehiculo = new camion_1.Camion("mercedes benz 1634", 2016, "diesel cuatro tiempos 6c en linea", "de caucho");
// let arrAuto: Auto[]=[primerVehiculo, segundoVehiculo, tercerVehiculo]
console.log(primerVehiculo, segundoVehiculo, tercerVehiculo);
