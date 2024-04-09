// rotas com hífens e pontos

const express = require('express');

const app = express();

app.listen(3000,()=>{
    console.log("Servidor no ar");
})

//rota base
app.get('/',(req,res)=>{
    res.send("Teste com parâmetros")
})

//rotas com hífen
app.get('/distancia/:pontoA-:pontoB',(req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB-pontoA;
    res.send(`A distância, usando hífen, entre ${pontoA} e ${pontoB} é ${distancia}`);
})

//rotas com ponto
app.get('/distancia/:pontoA.:pontoB',(req,res)=>{
    const pontoA = req.params.pontoA;
    const pontoB = req.params.pontoB;
    const distancia = pontoB-pontoA;
    res.send(`A distância, usando ponto, entre ${pontoA} e ${pontoB} é ${distancia}`);
})