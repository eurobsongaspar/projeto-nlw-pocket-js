const start = () => {
    
    while (true){ // cria a repetição infinita, por se tratar do valor true
        let opcao = "sair" // Cria a var OPCAO com a string CADASTRAR (TROQUEI PRA SAIR para parar a repeticao)
        switch(opcao){ // a CONDICIONAL switch recebe o valor da var OPCAO, que é CADASTRAR
            case "cadastrar": // Cria o caso CADASTRAR
                console.log("Vamos cadastrar")// O console vai mostrar a mensagem VAMOS CADASTRAR
                break // Para o caso CADASTRAR

            case "listar":
                console.log("Vamos listar")
                break

            case "sair":
                console.log("Sair")
                return
                
        }

    }
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