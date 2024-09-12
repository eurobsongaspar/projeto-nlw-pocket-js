const { select, input } = require('@inquirer/prompts') // Importa o objeto @inquirer/prompts de dentro da pasta node_modules mostrando o SELECT e o IMPUT, que é o que precisamos usar.

let meta = {
    value: 'Tomar 3l de água por dia',
    checked: false,
}
let metas = [ meta ]

const cadastrarMeta = async () => {

    const meta = await input({message:"Digita a meta:"}) // Cria uma função com intuito de pedir ao usuário que digite uma meta

    if(meta.length == 0){ // Lenght significa quantidade de caracteres, ou seja, ele verifica se o usuário escreveu algo no input
        console.log('A meta não pode ser vazia') // Caso ele não tenha digitado nada, mostra a mensagem META NÃO PODE SER VAZIA
        return 
    }

    metas.push(
        {
            value: meta, checked: false
        }
    )
}

const start = async () => { // ASYNC é usado junto com o AWAIT para solicitar uma pausa, ou seja, o sistema precisa esperar uma resposta do usuário para continuar, do contrário, o código ficaria em repetição contínua por conta do WHILE.
    
    while (true){ 
        
        // Var OPCAO recebe o SELECT, porém, usamos o AWAIT (aguardar)
        const opcao = await select({
            message: "Menu >", // Exibe a mensagem MENU com as opções para o usuário escolher, por isso o AWAIT faz o sistema esperar
            choices: [ // Define as opções do MENU
                {
                    name: "Cadastrar meta", // Opção CADASTRAR META no Menu
                    value: "cadastrar" // Recebe  o valor CADASTRAR que está dentro do SWITCH opcao 
                },
                {
                    name: "Listar metas", // Opção LISTAR METAS no Menu
                    value: "listar" // Recebe  o valor LISTAR que está dentro do SWITCH opcao 
                },
                {
                    name: "Sair", // Opção SAIR no Menu
                    value: "sair" // Recebe  o valor SAIR que está dentro do SWITCH opcao 
                }
            ]
        }) 

        switch(opcao){ 
            case "cadastrar": // Cria o case CADASTRAR 
                await cadastrarMeta()
                console.log(metas)
                break // para a mensagem

            case "listar": // Cria o case LISTAR
                console.log("Vamos listar") // Mostra a mensagem VAMOS LISTAR após seleção do usuário
                break // para a mensagem

            case "sair":
                console.log("Até a próxima!")
                return
                
        }

    }
}
start()