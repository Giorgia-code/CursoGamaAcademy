'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
var http_1 = require('http')
// Definicao de endereco / url / porta
var port = 5000
var server = http_1.createServer(function (request, response) {})

// Execucao
server.listen(port, function () {
  console.log('Server running on port ' + port)
})
