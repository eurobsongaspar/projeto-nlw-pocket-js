const start = () => {
    let count = 0 // inicia o contador com o valor 0
    while (count < 10){ // WHILE é estrutura de repetição. Verifica se a var count é menor ou igual a 10
    console.log(count) // Como foi atribuido 0 a count inicialmente, o console atribui o valor 0
    count = count + 1 // Nessa linha a var count recebe seu valor +1, OU SEJA 0+1
    } // Quando chega aqui, o app volta no While, que é uma repetição e a count já não é 0 e sim 1, e isso se repetirá por 10 vezes e a cada vez, o valor de count será somado a 1.
}
start()




/*
let meta = {
    value: "Ler um livro por mês",
    checked: true,
}

let metas = [
    meta,
    {
        value:"Caminhar 20 minutos todos os dias",
        checked:false,
    }
]

console.log(metas[1].value)
*/