var elementos = []
var topo = -1
const MAX = 10

function push(num) {
  if (topo < MAX) {
    topo = topo + 1
    elementos[topo] = num
  } else {
    console.log('PIlha está cheia')
  }
}

function estaVazia() {
  return topo == -1
}

function pop() {
  if (topo != -1) {
    let num = elementos[topo]
    topo = topo - 1
    return num
  } else {
    console.log('PIlha está vazia')
  }
}

// Parte do código que usa a pilha //

push(10)
push(20)
push(30)

console.log(elementos)

console.log(pop())
console.log(pop())
console.log(pop())
// vai retirar os elementos da pilha na ordem 30, 20 e 10, porque eu empilhei na ordem 10,20 e 30

var numDecimal = 10
var resto

console.log('Hora de empilhar')
while (numDecimal != 0) {
  resto = parseInt(numDecimal % 2)
  push(resto)
  console.log(resto)
  numDecimal = parseInt(numDecimal / 2)
}

console.log('Desempilhando tudo')
while (!estaVazia()) {
  console.log(pop())
}

// vai empilhar 0,1,0,1 e depois vai desempilhar 1,0,1,0
