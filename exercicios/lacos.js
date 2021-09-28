
for (let i=10; i > 0 ; i--) {
    console.log("valor de i " + i)
}


let frutas = ["Acabaxi", "Melancia", "Abate", "Melao"]

for (let i = 0; i < frutas.length; i++) {
    // dentro desse escopo
    // 0,1,2,3
    console.log(frutas[i])
} 


for (let i = 0; i < frutas.length; i++) {
    // dentro desse escopo
    // 0,1,2,3
    let fruta = frutas[i];

    console.log(frutas[i])
} 


 for (let fruta of frutas) { 
    console.log(fruta)
}

let gata = {

    nome: "Katina", // o atributo seria como as variaveis
    raca: "Vira-lata",
    peso: "4kg",
    tutura: "Bea",
}

// no objeto eu tenho a key e um atributo
// no array eu tenho um indice e uma propriedade

 for (let chave in gata) { 
    console.log(gata[chave])
} 
