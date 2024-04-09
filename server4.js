// exercício simples com parâmetros

const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log("Servidor em execução");
})

//dados dos clientes
const clientes = [
    {id:1, nome: "Altamiro", telefone: '111111111', email: 'alta@gmail.com'},
    {id:2, nome: "Berenice", telefone: '222222222', email: 'bere@gmail.com'},
    {id:3, nome: "Cícero", telefone: '333333333', email: 'cicero@gmail.com'},
    {id:4, nome: "Deolinda", telefone: '444444444', email: 'deolinda@gmail.com'},
    {id:5, nome: "Edite", telefone: '555555555', email: 'edite@gmail.com'}
]

//rotas
app.get('/',(req,res)=>{
    res.send("API de clientes");
})

//rota com o total de clientes
app.get('/total_clientes',(req,res)=>{
    res.send("Total de clientes: "+clientes.length);
})

//rota para apresentar os dados de um cliente específico
app.get('/clientes/:id',(req,res)=>{
    const cliente = clientes.find(c=>c.id===parseInt(req.params.id));

    //se não existir o cliente
    if(!cliente) res.status(404).send('Cliente não encontrado');

    //o cliente existe, vamoa apresentar as informações dele numa frase
    res.send(`O cliente é: ${cliente.nome}, telefone: ${cliente.telefone} e email: ${cliente.email}`)
})