console.log("Trabalhando com condicionais"); //titulo principal 
const destinos = new Array(
    "Salvador", "Bahia", "Curitiba", "Cascavel" //lista 
);

const compradorIdade = 15; //idade do usuário 
const estaAcompanhada = false; //se está acompanhado com maior de 18 anos ou não
console.log("Destinos Possíveis"); //titulo de destinos disponiveis na lista da variavel destinos 
console.log(destinos); //leitura de destinos dentro da variavel 

if (compradorIdade >= 18) { //usuário deve ter 18 anos ou mais 
    console.log("Bahia está esgotado"); //cidade da bahia está esgotado 
    console.log("Comprador maior de idade"); //comprador possui idade para comprar passagem 
    destinos.splice(1, 1); //removeu somente bahia 1primeiro itém e somente 1itém.
} else if (estaAcompanhada == false) { //esta ou não acompanhada o usuário 
        console.log("Bahia está esgotado"); //cidade da bahia está esgotado 
        console.log("Proíbida a venda se não estiver acompanhado por maior de 18 anos");
        destinos.splice(1, 1); //removeu somente bahia 1primeiro itém e somente 1itém.
    } else {

    }
    console.log("Comprador não está acompanhado"); //comprador está ou não acompanhado 
    
console.log(destinos);

//o comprador tem 18 anos? se tem ele pode comprar a passagem, menos para Bahia por que está esgotado.
//o comprador não tem 18 anos? então não pode comprar a passagem, caso estiver acompanhado por alguem maior de 18 anos, pode comprar a passagem!
// operadores:
// cocompradorIdade > 18 (maior que)
// cocompradorIdade < 18  (menor que)
// cocompradorIdade >= 18  (maior que ou igual)
// cocompradorIdade <= 18 (menor que ou igual)
// cocompradorIdade == 18  (igual) 

