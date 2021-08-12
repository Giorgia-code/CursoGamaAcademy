// Importacao de bibliotecas
import { parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { resolveTypeReferenceDirective } from 'typescript';

// Definicao de endereco / url / porta
const port = 5000

const server = createServer((request: IncomingMessage, response: ServerResponse) => {

  const urlparse = url.parse(request.url ? request.url : '', true)

  var resposta;

  // Receber informacoes do usuario
  const params = parse(urlparse.search ? urlparse.search : '');

  // Criar um usuario - Atualizar um usuario ; usando o writeFile porque ele sobrescreve o arquivo
    if (urlparse.pathname == '/criar-atualizar-usuario') {

    // Salvar as informacoes
    writeFile('users/' + params.id + '.txt',JSON.stringify(params), function (err: any) {
        if (err) throw err
        console.log('Saved!')

        resposta = 'Usuario criado/atualizado com sucesso'

        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain')
        response.end(resposta)
      }
    )
  }

});

// Execucao
server.listen( port, () => {
  console.log(`Server running on port ${port}`);
}
)


// Como usar a URL para teste
//http://localhost:5000/criar-atualizar-usuario?id=123&nome=giorgia
//http://localhost:5000/criar-atualizar-usuario?id=123&nome=giorgia-maia