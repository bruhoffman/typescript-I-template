"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frota_1 = require("./frota");
function buscarCarrosPorMarca(frota, marca) {
    if (marca === undefined) {
        return frota;
    }
    return frota.filter(function (carro) {
        return carro.marca === marca;
    });
}
console.table(buscarCarrosPorMarca(frota_1.frota, "Chevrolet"));
