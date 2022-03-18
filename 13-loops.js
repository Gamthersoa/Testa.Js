const idadeComprador1 = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";
const podeComprar = idadeComprador1 >= 18 || estaAcompanhada == true;

const listasDeDestinos = new Array(
    `Foz do Iguaçu`, `Curitiba`, `Cascavel`,
    `Londrina`, `Ponta Grossa`, `Itaipulândia`
);

let contador = 0;
while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
    } else {
        console.log("Destino não existe");
    }
    contador += 1;
} 