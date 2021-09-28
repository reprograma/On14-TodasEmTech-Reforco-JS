


let gata = {
    nome: "Katina", // o atributo seria como as variaveis
    raca: "Vira-lata",
    peso: "4kg",
    tutura: "Bea",


    // esse objeto aqui
    dizerMeuNome(nome) { // o metodo seria como uma funcao
        console.log(this.nome);
    }


}

gata.nome = "Kat"
gata.dizerMeuNome()



const cartao = {
    nome: "Beatriz",
    numero: "1234-5687",

    obterNome() {
        console.log(this.nome)
    }
}
const cartaoOnline = {
    nome: "Beatriz",
    numero: "4687-5687",

    obterNome() {
        console.log(this.nome)
    }
}

cartao.obterNome()


const client = {
    nome: "Beatriz",
    cpf: 123456789,

    endereco: {
        rua: "Leticia",
        cep: 1234567
    },
    cartoes: [
        {
            nome: "Beatriz",
            numero: "1234-5687",
        },
        {
            nome: "Outro",
            numero: "1234-5687",
        }
    ]
}


console.log(client.cpf) // aqui estou acessando client . cpf
console.log(client.endereco.rua) // aqui estou acessando, client . endereco . rua
console.log(client["endereco"]["rua"]) // 
console.log(client.cartoes[1].nome)


