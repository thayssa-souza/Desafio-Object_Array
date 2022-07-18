// Crie um objeto que receba ao menos três propriedades sobre você.
let aboutMe ={
    signo: 'Gêmeos',
    cachorros: 'Lajotinha e Sininho',
    cidade: 'São Paulo'
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
aboutMe.comida = 'Banoffee'

// Remova uma propriedade desse objeto.
delete aboutMe.cidade

//Mostre no console todas as propriedades desse objeto.
console.log(aboutMe)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
// Mostre no console o nome de um amigo de cada lista.
let Cadastro = [{
    nome: 'Morgana',
    idade: 25,
    telefone: '912345678',
    amigos: ['Lucia', 'Bianca', 'Marcos', 'João']
},{
    nome: 'Cornélia',
    idade: 29,
    telefone: '912345678',
    amigos: ['Morgana', 'Ofélia', 'Luana', 'João']
},{
    nome: 'Arthur',
    idade: 20,
    telefone: '912345678',
    amigos: ['Lucas', 'Ofélia', 'Maria', 'Rafael']
},{
    nome: 'Ofélia',
    idade: 22,
    telefone: '912345678',
    amigos: ['Ana', 'Ofélia', 'Luan', 'Pedro']
},{
    nome: 'Joaquim',
    idade: 25,
    telefone: '912345678',
    amigos: ['Arthur', 'Luna', 'Carlos', 'Pedro']
}]

console.log(Cadastro[0].amigos[1])
console.log(Cadastro[1].amigos[0])
console.log(Cadastro[2].amigos[3])
console.log(Cadastro[3].amigos[2])
console.log(Cadastro[4].amigos[2])