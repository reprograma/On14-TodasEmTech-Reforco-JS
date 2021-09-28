// forEach, find, filter, map
// Bunita, Marvim, Fufi,Luna, Aava, buck, nescal, Milk, Killua
let pets = [
    {
        name: 'Bunita',
        idade: 9
    },
    {
        name: 'Marvim',
        idade: 3
    },
    {
        name: 'Fufi',
        idade: 5
    },
    {
        name: 'Luna',
        idade: 5
    },
    {
        name: 'Aava',
        idade: 5
    },
    {
        name: 'Dori',
        idade: 5
    },
    {
        name: 'Nescal',
        idade: 5
    },


]


 console.log("ForEach")

// igual ao for of
pets.forEach((pet, i) => { 
    console.table(pet)
})

 

// Metodo find
 let petEncotrado = pets.find((pet) => { 
    return pet.name=="Dori"
})

let encontrarMarvim = pets.find( pet => pet.name=="Marvim")

// podemos deixar melhor
let busca  = "nes"

petEncontrado = pets.find(pet => pet.name.toLowerCase().includes(busca)) // dessa forma podemos procurar por uma parte do texto
console.log(petEncotrado); 

// metodo filter
let filtrarPorIdade = pets.filter ((pet, i) => { 
    console.log(pet.name);
    return pet.idade > 3
})

filtrarPorIdade = pets.filter( pet => pet.idade > 3) // fica melhor assim

// busca todos os pets que contenha a letra I
busca = "i"
let filtrarPorNome = pets.filter ( pet => pet.name.toLowerCase().includes(busca))



let petsLetrasMinusculas = pets.map( (pet, i) => {
    pet.name = pet.name.toLowerCase()
    // pet.name = pet.name.toUpperCase()    // caso quisesse colocar em Maisculo
    return pet
})

petsLetrasMinusculas = pets.map( pet => pet.name.toUpperCase())




