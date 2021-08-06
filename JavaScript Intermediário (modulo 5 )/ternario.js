let isValid = true

// Sem ternario
function verify(isValid) {
  if (isValid) {
    return true
  } else {
    return false
  }
}

console.log(verify(isValid))

// Com ternario
const result = isValid ? true : false // aqui esta escrito para verificar se o resultado for valido atribui true senao atribui falso

let zero = 0

const numeroResultado = zero > 0 ? 0 : -1
console.log(numeroResultado)
// Quando voce tiver uma condicao que se resume apenas a if ... e else ..., ou seja, apenas duas opcoes voce pode usar o ternario porque o código fica mais "limpo", tem um código mais sucinto
