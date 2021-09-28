
let i = 0;
while (i < 10) {
    console.log(i)
    i++;
}



let contador = 0;
let multiplicador = 5
console.log("Tabuada de " + multiplicador);
while (contador <= 10) {
    // so execulto esse codigo, caso a minha condicao seja verdadeira
    console.log(multiplicador + "x" + contador + " = " + contador * multiplicador)
    contador++
}

multiplicador = 2
contador = 0
do {
    // execulto uma vez, independente da condicao, 
    // continuo execultando caso a condicao seja verdadeira
    console.log(multiplicador + "x" + contador + " = " + contador * multiplicador)
    contador++
} while (contador <= 10);





// Pense nesse exemplo, qual sera o valor de 5 fatorial, depois que o while acabar?

const calcularFatorial = (fatorial) => {
    let resultado = 1
    let contador = fatorial;
    while (contador > 1) {
        resultado = resultado * contador
        contador--
    }
    return resultado
}

let fatorial = 5;
let valor = calcularFatorial(fatorial);

console.log(`valor do fatorial !${fatorial} ${valor}`)





