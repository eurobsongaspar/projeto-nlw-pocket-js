const { select } = require('@inquirer/prompts') // Importa o objeto @inquirer/prompts de dentro da pasta node_modules mostrando apenas o SELECT, que é o que precisamos usar.

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
                console.log("Vamos cadastrar") // Mostra a mensagem VAMOS CADASTRAR após seleção do usuário
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