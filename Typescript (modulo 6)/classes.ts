// Com as classes no TS voce consegue determinar as propriedades
class Data {
  public dia: number;
  private mes: number; // quando coloca privada a propriedade só pode ser acessada de entro da própria classe
  ano: number;

  constructor(dia: number, mes: number, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }
}

const data = new Data(1, 1, 2021);
console.log(data.dia);
console.log(data.mes) // náo deixa porque o mes está como private, só é acessivel dentro da própria classe

const data2 = new Data(1,1); // TS pega o ano lá de cima, porque eu informei, ou seja, ele usa esse valor como valor default

// Outra forma de escrever isso tudo

class Data {

constructor(public dia: number, public mes: number, public ano: number = 1970) {

}
}

