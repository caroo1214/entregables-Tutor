import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

export class Automotor{
    private marca: string;
    private modelo:number;
    private auto: Auto[] = [];
    private moto: Moto[] = [];
    private camion: Camion[] = [];

    constructor(marca: string, modelo: number, auto: Auto[]= [], moto:Moto[] = [], camion:Camion[]= []){
        this.marca= marca;
        this.modelo= modelo;
        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
    }
    // public agregarAuto(marca: string, modelo:string, auto:string, moto: string, camion:string): void{
    //     let AutoMotor: Auto = new Auto (marca, modelo, auto, moto, camion);
    //     if(!this.auto)
    // }
    getMarca(): string{
        return this.marca;
    }
    getModelo(): number{
        return this.modelo;
    }
}

const primerVehiculo = new Auto ("volkswagen gol", 2010, "nafta 2.0", "de caucho");
const segundoVehiculo = new Moto("Honda nx400", 2010, "cilindrada de 397 cc", "de caucho")
const tercerVehiculo = new Camion ("mercedes benz 1634", 2016, "diesel cuatro tiempos 6c en linea", "de caucho")

// let arrAuto: Auto[]=[primerVehiculo, segundoVehiculo, tercerVehiculo]

console.log(primerVehiculo, segundoVehiculo, tercerVehiculo);