# On14-TodasEmTech-Refor-o-JS


### Que tal um resumindo geral, para ficar aquela colinha para utilizar nos projetinhos?

<br>
<br>



# `Laços`

Laços são estruturas de repetição que são executadas até que uma condição seja verdadeira. Como usá-los?

 - Para interar um Array, para repetir um bloco ( trecho ) de código, para automatizar um bloco de código, etc.

<br>
<br>

| Sintáse | Descrição |
| ----------- | ----------- |
|`For`   | repete um bloco de código enquanto uma condição for verdadeira. |
|`While` | Caso a condição seja verdadeira, ele executa o bloco de código.|
|`Do While` | Execulta uma vez, independente se a condição seja verdadeira ou não, enquanto |a condição for verdadeira, ele continua o loop.|
|`For of`  | (Intera) Percorre um Array.|

<br>
<br>

## Exemplos:  

### `For` 

```
for(let i = 0; i < 10; i++){ 
    console.log(`estamos no numero ${i}`)
}
```


### `While` 


```
let total = 0; 
let contador = 0;

while(contador < 10){

    total += contador * 100;
    contador++
    console.log(`contando...${contador}`)
}
```


### `Do While`

```
let total = 0; 
let contador = 0;

do{
    total += contador * 100;
    contador++
    console.log(`contando...${contador}`)

} while(contador < 10)
```


### `For of`
```
    let aldeias = ["Aldeia da Folha", "Aldeia da Areia", "Aldeia das Nuvens", "Aldeia do Som"]

    for(let aldeia of aldeias){ 
        console.log(`Mostre para min a aldeia: ${aldeia}`)
    }
```

<br>
<br>
<br>
<br>

## `Objetos`

<br>
<br>

Objetos são `coleção de dados`, que sao decrarados por meio `chaves` e `valores`. Objetos são usados para `abstrair` o mundo real, como por exemplo, um `cartão`, um `gatinho`, uma `aluna`, etc.


- `Atributos` - são variáves( *ou seja, dentro do objeto a `variável` se torna um `atributo`*) que um objeto possui.

- `Métodos` - são as funções ( *ou seja, dentro do objeto a `função` se torna um `método`*) que um objeto possui.  O método sempre vai `executar uma ação`, como se fosse um `verbo` na lingua portuguesa.


<br>
<br>
<br>

```
// exemplo 1 - mais simples
const pessoa = { 
    nome: "Beatriz",
    sobrenome: "Ramerindo",

    falarNome(){ 
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    }

}

// exempo 2 - mais próximo do que seria na vida real
const Cartao = {
    numero: "1234-4567-8910-0000",
    bandeira: "Visa",
    vencimento: "12/20",
    cvv: "123",
    titular: "Beatriz Ramerindo",

    pagarDebito(){ 
        console.log(`Pagando com o cartão ${this.numero}, na funcao debito`)
    },

    pagarCredito() { 
        console.log(`Pagando com o cartão ${this.numero}, na funcao credito`)
    },

    getDados() {
        return {
            numero: this.numero,
            bandeira: this.bandeira,
            vencimento: this.vencimento,
            cvv: this.cvv,
            titular: this.titular
        }
    }

}
```


<br>
<br>
<br>
<br>

# `Arrays`


O array é uma `estrutura de dados` que contém um `índice` **numérico** e um `elemento` que é  o valor.

Esse elemento pode ser: uma `String` - texto, um Numero - *float, int, etc*, um `Objeto`, ou até mesmo outro `array`.



*Mas porque usar o Array?*
Quando precisamos montar uma `coleção de dados`, como por exemplo, uma lista de produtos, nomes,  filmes, etc.


 


Como exemplo, vou utilizar uma lista de alunas.

```
let alunas = [
    "Amanda",
    "Priscila",
    "Vanessa"
]
```

mas ai precisamos adicionar mais uma alunas.



```
alunas[4] = "Maria"
```


Acho que podemos melhorar um pouquinho,

```
alunas[ alunas.length ] = "Maria"
```

Seraá que funciona?


```
alunas.push("Maria")
```

Aceita uma variavel? *Sim, todos os metodos do array aceitam uma variavel, um objeto, um array como parametros, o ideal é sempre manter um **padrao da estrutura**, se tenho um array de **nomes**, todos os elemenos do meu array precisam ser **nomes**.*

```
let  jane = "Beatriz"
```

```
alunas.push(Jane)
```


### E quais outros metodos, ou seja, formas de manipula-lo, possui?
<br>

**Exemplo:** <br>
alunas(array) . `metodo` <br>  execulta uma ação caso seja um `método`, ou mostra um valor, caso seja um `atributo`.

<br>
<br>

### Mostra o tamanho total do array, ou seja, quantos elementos ele tem.

```
let totalDeAlunas = alunas.length
```

 ### Criar um Array a partir de uma String 

``` 
let nomes = "Amanda, Priscila, Vanessa";
alunas = nomes.split(",");
```


 ### Transformando um Array em String

```
alunas = alunas.join(",");
```


 ### Adicionar um elemento ao final do array


```
alunas.push("Maria");
```

 ### Remover o ultimo elemento do array e o retorna

```
alunas.pop();
```

 ### Adicionar um elemento ao inicio do array

```
alunas.unshift("Bianca");
```

 ### Remover o primeiro elemento do array

``` 
alunas.shift();
```


### Copiar um array, *a gente nunca quer modificar os dados originais, por isso precisamos criar um novo array*.



```
var copia = alunas.slice();
```

podemos também copiar somente uma parte do array.


```
var copia = alunas.slice(1,3);

```




 ### Remover um elemento em uma posição especifica do array

```
alunas.splice(2, 1);
```

### Acionar um elemento em uma posição especifica do array

```
alunas.splice(2, 0, "Jamile");
```


 ### Localizar um indice do Array

```
alunas.indexOf("Beatriz");
```



 ### Localizar se um elemento existe no array

```
alunas.includes("Beatriz");
```


 ### Ordenar em ordem alfabetica, numerica, etc 

```
alunas.sort();
```

 ### Inverter a ordem do array

```
alunas.reverse();
```


 ### Mergiando 2 arrays, ou seja, unindo os elementos


```
let alunas = ["Amanda", "Priscila", "Vanessa"];
let alunas2 = ["Maria", "Bianca", "Beatriz"];

alunas = alunas.concat(alunas2); // metodo 1 - Array.concat
alunas = [...alunas, ...alunas2]; // metodo 2 - Spread Operator

```


<br>
<br>
<br>
<br>


##  Outros métodos
| Sintáse | Descrição |
| ----------- | ----------- |
|array`.forEach`   | `pecorre um array`, sem `modificar` o array original |
|array.`find` | `encontra o primeiro` elemento do array especificado e o retorna|
|array.`filter` | `filtra` todos os elementos e os retorna com base nos parametros especificados| 
|array.`map`  | `mapea` um array com base no retorno especificado|
|array.`every`  | returna  Bolean `true`, caso todos os elementos sejam iguais |


<br>
<br>

```
let alunas = ["Amanda", "Priscila", "Vanessa"];

// Percorre o Array
alunas.forEach( (aluna) => { 
    console.log(aluna);
})

// Faz uma busca 
let busca = "Priscila";
let alunaEncontrada = alunas.find( (aluna) => { 
    return aluna == busca;
})


// Retorna todas as alunas que contem a vogal "a"
let alunasFiltradas = alunas.filter( (aluna) => { 
    return aluna.includes("a");
})

// Deixa todos os nomes em Caixa Alta
let alunasMapeadas = alunas.map( (aluna) => { 
    return aluna.toUpperCase();
})


// Verifica se todas as alunas são iguais
let todasIguais = alunas.every( (aluna) => { 
    return aluna == "Amanda";
})

```




<br>
<br>
<br>
<br>
<br>


# Mais exemplos e a documentação de referência

### `Laços`

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration
<br>

### `Array`

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

<br>

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

<br>

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/find

<br>

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

<br>

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every

<br>

# Sites para treinar lógica

https://www.freecodecamp.org/learn/
<br>
https://www.hackerrank.com/
<br>
https://www.codewars.com/


