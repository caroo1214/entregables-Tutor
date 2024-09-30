import { Motor, Rueda } from './ruedasMotor';

export class Auto {
    private marca: string;
    private modelo: number;
    private motor: string;
    private ruedas: string;

    constructor(marca: string, modelo: number, rueda:string, motor: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.motor = motor;
        this.ruedas = rueda; 
    }

    // GETTERS
    public getMotor(){
        return this.motor;
    }
    public getRueda(){
        return this.ruedas;
    }
    public getMarca(): string {
        return this.marca;
    }
    public getModelo(): number {
        return this.modelo;
    }

    // SETTERS
    setMarca(nombre: string):string{
        nombre= "volkswagen gol";
        return nombre;
    }
    setMoldelo(numero: number):number{
        numero=2010;
        return numero;
    }
}

const miAuto = new Auto("volkswagen gol", 2010, "nafta 2.0", "de caucho");