const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.sendFile(__dirname + '/paginas/index.html')
})

app.get('/sobre',function(req,res){
    res.sendFile(__dirname + '/paginas/sobre.html')
})

app.get('/Linha04',function(req,res){
    res.send("Next station Luz")
})

app.get('/cadastro/:nome/:idade',function(req,res){
    res.send('Olá seu nome é ' + req.params.nome + '\nSua idade: ' + req.params.idade)
    //res.send('Sua idade: ' + req.params.idade)
    //res.send(req.params)
})

app.listen(8081,function(){
    console.log('Please, mind the gap between the train and the plataform http://localhost:8081')
})