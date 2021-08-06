// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Girogia Maia';

// Array
const idades: number[] = [23, 28, 45, 32]; // dizendo que é um array de números
const idades2: Array<number> = [23, 28, 45, 32] // outra forma de declarar variavel do tipo array

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['Vitor', 5, true];

// Enum
enum StatusAprovacao {
  Aprovado = '001' ,
  Pendente = '002' ,
  Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, 'Vitor', false]; 

// Void (serve para funcoes que nao retornam nada)
function printarNaTela(msg: string): void {
  console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objecto: object) {

}
criar({
  propriedade: 1;
})
criar('Vitor') // Dá erro, é só para objeto

// Never
function loopInfinito(): never { // é uma funcao do tipo never porque ela nunca termina
  while(true) { }
}

function erro(mensagem: string): never {
  throw new Error(mensagem);
}

function falha(): never {
  return erro('Algo falhou');
}

// Unior Types (pode ter um tipo ou outro)
function exibirNota(nota: number | string | boolean) { // essa | significa ou
  console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);
exibirNota(false);
exibirNota(true);

// Alias (atalhos)
type Funcionarios = Array<string>;
const funcionarios: Funcionarios = ['Vitor', 'Fulano', 'Ciclano'];
function tratarFuncionarios(funcionarios: Funcionarios) {
}

// Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
  nome: string;
  telefone1: string;
  telefone2?: string // essa ? diz que este campo é opcional
}
const contato: Contato = {
  nome: 'Giorgia' ,
  telefone1: '123456'
}

// Type Assertion
const minhaIdade: any = 23;
minhaIdade as number // estou informando explicitamente que minha variável será do tipo number
(minhaIdade as number).toString();

const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);

const input = <HTMLInputElement>document.getElementById("numero1"); // outra forma de informar explicitamente o tipo de variável
console.log(input.value);











