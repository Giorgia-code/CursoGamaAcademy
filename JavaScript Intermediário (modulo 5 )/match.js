const cpf = 'Meu CPF é 123.456.569-22'

const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}')

console.log(cpf.match(regex)) // vai imprimir um objeto contento somente o numero do cpf
