var clientes = [
    [nome = "Bruno",
     código = "123", 
     senha = "123", 
     saldo = 100], 
    [nome = "Joaozinho",
     código = "456", 
     senha = "456", 
     saldo = 10],
]

var codigo = window.prompt("Digite o seu código")
var senha = window.prompt("Digite sua senha")

function procura_cliente(cliente){
return cliente[1] == codigo && cliente[2] == senha
}

var cliente_localizado = (clientes.find(procura_cliente))

if(cliente_localizado == null){
alert("Cliente não localizado")
}

else{
console.log(cliente_localizado)
var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))
}

