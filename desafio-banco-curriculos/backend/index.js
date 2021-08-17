// Inclusao dos pacotes
const express = require('express')
var mysql = require('mysql2')
const cors = require('cors')

// Instancia o express
const app = express()
app.use(express.json())
app.use(cors())

// Definicao de porta
const port = 3030

// Abrindo conexao com base de dados
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'semsenhaGi',
  database: 'sistema_candidatos'
})

connection.connect()

// Criando um servico
app.post('/candidatos', (req, res) => {
  const {
    nome,
    cargo,
    dataNascimento,
    estadoCivil,
    sexo,
    logradouro,
    cep,
    bairro,
    cidade,
    uf,
    telefoneFixo1,
    telefoneFixo2,
    celular,
    contato,
    email,
    identidade,
    cpf,
    veiculo,
    habilitacao
  } = req.body

  const dia = dataNascimento.split('/')[0]
  const mes = dataNascimento.split('/')[1]
  const ano = dataNascimento.split('/')[2]

  const candidato = {
    nome,
    cargo,
    dataNascimento: new Date(ano, mes - 1, dia),
    estadoCivil,
    sexo,
    telefoneFixo1,
    telefoneFixo2,
    celular,
    contato,
    email,
    identidade,
    cpf,
    veiculo,
    habilitacao
  }
  var sql = 'INSERT INTO candidatos SET ?'
  connection.query(sql, candidato, function (erro, result) {
    if (erro) {
      return res.status(400).json(erro)
    } else {
      return res.json(candidato)
    }
  })
})

app.get('/', (req, res) => {
  res.send('Hello')
})

// Subindo servidor Node
app.listen(port, () => {
  console.log(`To OK at http://localhost:${port}`)
})
