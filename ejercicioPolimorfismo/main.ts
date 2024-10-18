import { Luchador} from "./luchador";
import { Mago } from "./mago";
import { Arquero } from "./arquero";
import { Asesino } from "./asesino";
import { Curandero} from "./curandero"
import { Juego } from "./juego";
import { CajaMagica } from "./cajaMagica";


const juego = new Juego();

//   se declaran 5 argumentos  nombre,nivel, salud, fuerza de dañoy poder especial
const luchador= new Luchador(" El luchador Thor",1,100, 25, "Espada");
const mago = new Mago("El Mago Gandalf",1, 100, 20, "Fuego");
const arquero = new Arquero("El Arquero Charles", 1,100, 30, "Arco");
const asesino = new Asesino("El Asesino Raider",1,100, 40, "Veneno mortal");
const curandero = new Curandero("El curandero Jacobo", 1,100, 35, "Poción de vida");

juego.agregarPersonaje(luchador);
juego.agregarPersonaje(mago);
juego.agregarPersonaje(arquero);
juego.agregarPersonaje(asesino);
juego.agregarPersonaje(curandero);



juego.iniciarJuego();

arquero.encontrarCajaMagica();
arquero.mostrarHabilidades();
console.log("----El Arquero está preparado para contraatacar----\n")


console.log("El Luchador evolucionó")
console.log(luchador);

luchador.setArma("Espada de Fuego")
luchador.setNivel(2)
console.log(luchador)
console.log ("---------------!Nivel y arma cambiado con exito¡----\n")

