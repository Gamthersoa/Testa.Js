console.log("\n\n Veículos mais vendidos");

const carros = new Array(
    "PEUGEOT", 
    "FORD", 
    "CHEVROLET",
    "BMW"
);

const idadeCNH = 29; 

console.log(carros);

if(idadeCNH >= 30){
    console.log("\n\n Veículos mais vendidos");     console.log("\n\n Pessoas acima de 30 anos")
    carros.splice(1,1);
    carros.splice(0,1);
    console.log(carros);
} else {
    console.log("\n\n Veículos mais vendidos");     console.log("\n\n Pessoas com até 29 anos");
    carros.splice(3,1);
    carros.splice(2,1);
    console.log(carros);
}


