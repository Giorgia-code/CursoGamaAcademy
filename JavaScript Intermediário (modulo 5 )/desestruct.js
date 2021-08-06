const pessoa = {
  nome: 'Giorgia',
  sobrenome: 'Maia',
  idade: 29,
  profissao: 'Bailarina'
}

console.log(pessoa) // vai mostrar um objeto com todas essas propriedades

// Sem desestruct
let nome = pessoa.nome
let sobrenome = pessoa.sobrenome
let idade = pessoa.idade
let profissao = pessoa.profissao

// Com desestruct
let { nome, sobrenome, idade, profissao } = pessoa
console.log(nome, sobrenome, idade, profissao) // vai mostrar o obejto com as propriedades
