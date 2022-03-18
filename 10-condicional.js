console.log("Agência de Viagens");

console.log("Destinos");

const listasDeDestinos = new Array(
    `Foz do Iguaçu`, `Curitiba`, `Cascavel`,
    `Londrina`, `Ponta Grossa`, `Itaipulândia`
);

const idadeComprador = 18;
console.log(listasDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");

} else {
    console.log("Não disponível para menores de 18");
    listasDeDestinos.splice(1, 1);

}


// >18
// >18
// <=18
// >18
// ==18