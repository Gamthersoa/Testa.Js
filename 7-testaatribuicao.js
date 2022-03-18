console.log("Trabalhando com atribuição de variáveis");
const idade = 24;
let nome = "Gustavo";
const sobrenome = "Theodoro";

//pode ser utilizado aspas simples também para string

console.log(nome, sobrenome);

//${aaaaaa} para texto muito grande, facilita a operação.
console.log(`Meu nome é  ${nome} ${sobrenome}`);

//variavel (let) pode ser alterada.
nome = nome + sobrenome;
console.log(nome);

//quando for necessário utilizar let, mas em regra const não são alteradas. 