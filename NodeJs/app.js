// Incluindo uma biblioteca
const http = require('http')
const url = require('url')
const queryString = require('query-string')
const fs = require('fs')

// Definicao de endereco / URL
const hostname = '127.0.0.1' //localhost
const port = 3000

// Implementacao da regra de negócio, onde está a lógica de programacao
const server = http.createServer((req, res) => {
  var resposta
  const urlparse = url.parse(req.url, true)
  // Receber informacoes do usuario
  const params = queryString.parse(urlparse.search)

  // Criar um usuario - Atualizar um usuario ; usando o writeFile porque ele sobrescreve o arquivo
  if (urlparse.pathname == '/criar-atualizar-usuario') {
    // Salvar as informacoes
    fs.writeFile(
      'users/' + params.id + '.txt',
      JSON.stringify(params),
      function (err) {
        if (err) throw err
        console.log('Saved!')

        resposta = 'Usuario criado/atualizado com sucesso'

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end(resposta)
      }
    )
  }

  // Selecionar usuario
  else if (urlparse.pathname == '/selecionar-usuario') {
    fs.readFile('users/' + params.id + '.txt', function (err, data) {
      resposta = data

      res.statusCode = 200
      res.setHeader('Content-Type', 'application/json')
      res.end(resposta)
    })
  }

  // Remover o usuario
  else if (urlparse.pathname == '/remover-usuario') {
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log('File deleted!')

      resposta = err ? 'Usuario nao encontrado' : 'Usuario removido'

      res.statusCode = 200
      res.setHeader('Content-Type', 'text/plain')
      res.end(resposta)
    })
  }
})

// Execucao
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

// Como usar a URL para teste
//http://localhost:3000/criar-atualizar-usuario?nome=giorgia&idade=30&id=1
//http://localhost:3000/criar-atualizar-usuario?nome=giorgia&idade=29&id=1
//http://localhost:3000/selecionar-usuario?id=1
//http://localhost:3000/remover-usuario?id=1
