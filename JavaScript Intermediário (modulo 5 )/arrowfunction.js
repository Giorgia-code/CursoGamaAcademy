// Sem arrow function
function soma(x, y) {
  return X + y
}

console.log(soma(3, 4))

const multiplicaco = function (x, y) {
  return x * y
}

console.log(multiplicaco(5, 5))

// Com arrow function
const dividir = (x, y) => {
  return x / y
}

const objeto = () => ({ nome: 'Giorgia', sobrenome: 'Maia' }) // aqui uma funcao anonima retorna um obejto com as propriedades descritas, quando temos este caso o objeto precisa estar encapsulado, ou seja, vir dentro dos ()
