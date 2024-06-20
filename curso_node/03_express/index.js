const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("Welcome to CPTM, we're not here for you")
})

app.get('/Linha10',function(req,res){
    res.send("Pay attention to your belongs, especially your cellphone and wallet")
})

app.get('/Linha04',function(req,res){
    res.send("Next station Luz")
})

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Olá meu nome é ' + req.params.nome + '\nSua idade: ' + req.params.idade)
    //res.send('Sua idade: ' + req.params.idade)
    //res.send(req.params)
})

app.listen(8081,function(){
    console.log('Please, mind the gap between the train and the plataform http://localhost:8081')
})