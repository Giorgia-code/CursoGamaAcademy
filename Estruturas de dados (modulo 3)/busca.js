var valores = [5, 8, 10, 22, 45, 38]

function busca(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i
    }
  }
  return -1
}

// Usando a nossa ferramenta de busca

console.log(busca(10)) // aqui vai mostrar 2 porque o 10 está na posicao 2
console.log(busca(50)) // aqui vai mostrar -1 porque o 50 nao faz parte do elemento

// Usando a busca binária
var valores = [5, 8, 10, 22, 38, 45, 60, 90, 100, 120]

function busca(num) {
  for (i = 0; i < 6; i++) {
    if (num == valores[i]) {
      return i
    }
  }
  return -1
}

function buscaBin(num) {
  let inicio, fim
  let meio
  inicio = 0
  fim = 9
  while (inicio <= fim) {
    meio = parseInt((inicio + fim) / 2)
    if (num == valores[meio]) {
      return meio
    } else {
      if (num > valores[meio]) {
        inicio = meio + 1
      } else {
        fim = meio - 1
      }
    }
  }
  return -1
}

console.log(buscaBin(10))
console.log(buscaBin(60))
