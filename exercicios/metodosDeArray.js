var pets =  ["neguinho", "Boris", "Simba", "Dori", "Pandora", "Mina"]
// Bunita, Marvim, Fufi,Luna, Aava, buck, nescal, Milk, Killua



pets.push("Bunita") // adiciona um elemento no final array



pets.pop() // remove o ultimo elemento do array



pets.unshift("Bunita") // adiciona um elemento no comeco do array
pets.unshift("Passarinho")



pets.shift() // remove o primeiro elemento do array, faz o  oposto do pop




let copiaPets = pets.slice(1, 4) // cria uma copia do array




pets.splice(0, 2) // remove e adiciona elements do array de acordo com os parametros
pets.splice(0, 2,  "Fufi", "Luna", "Buck") // removi e adicionei no lugar


let index = pets.indexOf("Dori") // se encontrar retorna um numero positivo, caso nao encontre retorna -1


let existeDori = pets.includes("Dori") // caso tenha o buck ele retorna true, caso nao tenha, false


pets.sort() // ordena em ordem alfabetica, numerica, etc

console.log(pets)


pets.reverse()

console.log(pets)