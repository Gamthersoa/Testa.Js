//link importante (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)


console.log(`trabalhando com listas`);
//CRTL + K + C = seleciona tudo para não declaravel 
//CRTL + K + U = seleciona tudo para declaravel


// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listasDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

//push (ele inseri dados dentro da const ou nova Array)

listasDeDestinos.push(`Curitiba`);


//array para declarar lista
console.log(listasDeDestinos);

//Inicia a contagem de 0!!!!!
//remover da Array
//no splice deve ser informado a posição e a quantidade
listasDeDestinos.splice(2, 1);
console.log(listasDeDestinos);

console.log(listasDeDestinos[2]);

//palavra new é reservada da linguagem 