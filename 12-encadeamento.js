const estaAcompanhada = true;
const maiorDeIdade = 17;
const idadeUser = 15;
console.log("Destinos possíveis:");

const listaDestinos = new Array(
    `Foz do Iguaçu`, `Curitiba`, `Cascavel`,
    `Londrina`, `Ponta Grossa`, `Itaipulândia`
);
console.log(listaDestinos);

if (maiorDeIdade >= 18) {
    console.log("Comprador maior de idade");
} else if (estaAcompanhada) {
    console.log("Está acompanhada com responsável");
} else {
    console.log("Não está acompanhada");
}
console.log("Não é maior de idade");

// || = ou 
// && somente esse e esse 
//       \n pula linha 


