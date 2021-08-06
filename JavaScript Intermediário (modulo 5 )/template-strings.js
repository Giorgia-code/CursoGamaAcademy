let meuNome = 'Giorgia'
let meuSobrenome = 'Maia'
let minhaProfissao = 'Desenvolvedora Frond-end'

//Sem template string
console.log(
  'Olá eu sou ' +
    meuNome +
    '' +
    meuSobrenome +
    'minha profissao é:' +
    minhaProfissao
)

//Com template string
console.log(
  `Olá eu sou ${meuNome} ${meuSobrenome} e minha profissao é ${minhaProfissao}`
)

console.log(`O resultado da soma de 1 + 1 = ${1 + 1}`) // vai exibir o resultado 2
console.log(`O objeto json ${{ chave: 'valor' }}`) // vai exibir o obejto json
