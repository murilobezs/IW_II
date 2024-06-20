// solicitar um módulo interno do node.js chamado http

var http = require('http')

// Abrindo um servidor http
http.createServer(function(req,res){
    res.end("Radical Optimism is out now!")
}).listen(8081)

console.log('Servidor rodando...')