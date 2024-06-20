const express = require('express')
const app = express()
const handlebars = require ('express-handlebars')

//configuração do handlebars
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultlayout: 'main'}))
    app.set('view engine', 'handlebars')

    //conexão com o banco de dados
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('teste', 'root', '', {
        host: "localhost",
        dialect: 'mysql'
    })

// Rotas 
    app.get('/cad', function(req,res){
        //res.send('ROTA DE CADASTRO DE POSTS')
        res.render('formulario')
    })

    app.post('/add', function(req,res){
        res.send('FORMULÁRIO RECEBIDO')
    })



app.listen(8081,function(){
    console.log('Please, mind the gap between the train and the plataform http://localhost:8081')
})