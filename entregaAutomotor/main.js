"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var Vehiculo_1 = require("./Vehiculo");
var registroAutomotor_1 = require("./registroAutomotor");
var registro = new registroAutomotor_1.RegistroAutomotor();
var ford = new Vehiculo_1.Vehiculo("Ford", "Ka", "Hatchback", "Vehículo urbano y compacto");
var motomel = new Vehiculo_1.Vehiculo("Motomel", "110cc", "Transporte urbano y recreativo", "Motocicleta de calle");
var siena = new Vehiculo_1.Vehiculo("Fiat", "Siena", "Vehículo familiar y urbano", "Sedán");
var scania = new Vehiculo_1.Vehiculo("Scania", "R 450", "Transporte de carga pesada", "Camión de larga distancia");
// Agregar vehículos al registro
registro.agregarVehiculo(ford);
registro.agregarVehiculo(motomel);
registro.agregarVehiculo(siena);
registro.agregarVehiculo(scania);
// Listar vehículos
console.log("Lista de vehículos en el registro:");
console.log(registro.getListaVehiculo()); // Llama al método para obtener la lista de vehículos.
// Eliminar vehiculo.
registro.eliminarVehiculo(ford);
console.log("El vehículo eliminado es: ", ford);
console.log(" Vehículo eliminado con exito ");
console.log(registro.getListaVehiculo());
// Vehiculo nuevo.
var fitito = new Vehiculo_1.Vehiculo("fitito", "m83", "Transporte para pequeños ", " corta distancia");
registro.agregarVehiculo(fitito);
console.log("El vehículo agregado es: ");
// Ingreso de un vehiculo por el usuario.
var marca = rls.question("Ingrese la marca del vehículo: ");
var modelo = rls.question("Ingrese el modelo del vehículo: ");
var tipo = rls.question("Ingrese el tipo del vehículo: ");
var uso = rls.question("Ingrese el uso del vehículo: ");
var nuevoVehiculo = new Vehiculo_1.Vehiculo(marca, modelo, tipo, uso);
// Agregar el nuevo vehículo al registro
registro.agregarVehiculo(nuevoVehiculo);
console.log("Vehículo agregado:");
console.log(registro.getListaVehiculo());
